import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class TournamentsService {
  constructor(private prisma: PrismaService) {}

  async create(
    // eslint-disable-next-line
    createTournamentDto: CreateTournamentDto,
    organizerId: string,
  ) {
    return this.prisma.tournament.create({
      data: {
        name: createTournamentDto.name,
        description: createTournamentDto.description,
        format: createTournamentDto.format,
        playoff_teams: createTournamentDto.playoff_teams,
        organizer_id: organizerId,
      },
    });
  }

  async findAll(
    organizerId: string
  ) {
    return this.prisma.tournament.findMany({
      where: {
        organizer_id: organizerId,
      },
    });
  }

  async findOne(
    tournamentId: string,
    organizerId: string,
  ) {
    return this.prisma.tournament.findFirst({
      where: {
        id: tournamentId,
        organizer_id: organizerId,
      }
    })
  }

  async update(
    tournamentId: string,
    organizerId: string,
    updateTournamentDto: UpdateTournamentDto,
  ) {
    return this.prisma.tournament.updateMany({
      where: {
        id: tournamentId,
        organizer_id: organizerId,
      },
      data: updateTournamentDto,
    });
  }

  async delete(
    tournamentId: string,
    organizerId: string,
  ) {
    return this.prisma.tournament.deleteMany({
      where: {
        id: tournamentId,
        organizer_id: organizerId,
      },
    });
  }

  async getStandings(
    tournamentId: string,
  ) {
    return this.prisma.standings.findMany({
      where: {
        tournament_id: tournamentId,
      },
      include: {
        team: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: [
        {
          points: 'desc',
        },
        {
          goal_difference: 'desc',
        },
        {
          goals_for: 'desc',
        },
      ],
    });
  }

  async generateFixture(
    tournamentId: string,
    organizerId: string,
  ) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        id: tournamentId,
        organizer_id: organizerId,
      },
    });

    if (!tournament) {
      throw new BadRequestException(
        'Tournament not found',
      );
    }

    if (tournament.format !== 'LEAGUE') {
      throw new BadRequestException(
        'Automatic fixture generation is only available for league tournaments',
      );
    }

    const existingMatches =
      await this.prisma.match.count({
        where: {
          tournament_id: tournamentId,
        },
      });

    if (existingMatches > 0) {
      throw new BadRequestException(
        'Tournament already has matches',
      );
    }

    const teams = await this.prisma.team.findMany({
      where: {
        tournament_id: tournamentId,
      },
    });

    if (teams.length < 2) {
      throw new BadRequestException(
        'At least 2 teams are required',
      );
    }

    const matches: any[] = [];

    for (let i = 0; i < teams.length; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        matches.push({
          tournament_id: tournamentId,
          team_a_id: teams[i].id,
          team_b_id: teams[j].id,
        });
      }
    }

    await this.prisma.match.createMany({
      data: matches,
    });

    return {
      message: 'Fixture generated successfully',
      matchesCreated: matches.length,
    };
  }
}

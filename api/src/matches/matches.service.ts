import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchResultDto } from './dto/update-match-result.dto';

@Injectable()
export class MatchesService {
  constructor(private prisma: PrismaService) {}

  async create(
    createMatchDto: CreateMatchDto,
    organizerId: string,
  ) {
    const tournament =
      await this.prisma.tournament.findFirst({
        where: {
          id: createMatchDto.tournament_id,
          organizer_id: organizerId,
        },
      });

    if (!tournament) {
      throw new NotFoundException(
        'Tournament not found',
      );
    }

    if (
      createMatchDto.team_a_id ===
      createMatchDto.team_b_id
    ) {
      throw new BadRequestException(
        'Teams must be different',
      );
    }

    const teamA = await this.prisma.team.findUnique({
      where: {
        id: createMatchDto.team_a_id,
      },
    });

    const teamB = await this.prisma.team.findUnique({
      where: {
        id: createMatchDto.team_b_id,
      },
    });

    if (!teamA || !teamB) {
      throw new NotFoundException(
        'Team not found',
      );
    }

    if (
      teamA.tournament_id !== createMatchDto.tournament_id ||
      teamB.tournament_id !== createMatchDto.tournament_id
    ) {
      throw new BadRequestException(
        'Teams do not belong to this tournament',
      );
    }

    return this.prisma.match.create({
      data: {
        tournament_id:
          createMatchDto.tournament_id,
        team_a_id: createMatchDto.team_a_id,
        team_b_id: createMatchDto.team_b_id,
        match_date: new Date(
          createMatchDto.match_date,
        ),
      },
    });
  }

  async findByTournament(
    tournamentId: string,
  ) {
    return this.prisma.match.findMany({
      where: {
        tournament_id: tournamentId,
      },
      include: {
        team_a: true,
        team_b: true,
      },
      orderBy: {
        match_date: 'asc'
      }
    })
  }

  async updateResult(
    matchId: string,
    organizerId: string,
    dto: UpdateMatchResultDto,
  ) {
    const match = await this.prisma.match.findFirst({
      where: {
        id: matchId,
        tournament: {
          organizer_id: organizerId,
        },
      },
    });

    if (!match) {
      throw new NotFoundException(
        'Match not found',
      );
    }

    return this.prisma.match.update({
      where: {
        id: matchId,
      },
      data: {
        team_a_score: dto.team_a_score,
        team_b_score: dto.team_b_score,
        status: 'FINISHED',
      },
    });
  }
}
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchResultDto } from './dto/update-match-result.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

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

      const updateMatch = await this.prisma.match.update({
        where: {
          id: matchId,
        },
        data: {
          team_a_score: dto.team_a_score,
          team_b_score: dto.team_b_score,
          status: 'FINISHED',
        },
      });

      await this.recalculateStandings(
        match.tournament_id,
      );
      
      return updateMatch;
  }

  async recalculateStandings(
    tournamentId: string,
  ) {
    const standings = await this.prisma.standings.findMany({
      where: {
        tournament_id: tournamentId,
      },
    });

    const matches = await this.prisma.match.findMany({
      where: {
        tournament_id: tournamentId,
        status: 'FINISHED',
      },
    });

    const standingsMap: Record<string, any> = {};

    for (const standing of standings) {
      standingsMap[standing.team_id] = {
        ...standing,
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goals_for: 0,
        goals_against: 0,
        goal_difference: 0,
        points: 0,
      };
    }

    for (const match of matches) {
      const teamA = standingsMap[match.team_a_id];
      const teamB = standingsMap[match.team_b_id];

      teamA.played++;
      teamB.played++;

      teamA.goals_for += match.team_a_score;
      teamA.goals_against += match.team_b_score;

      teamB.goals_for += match.team_b_score;
      teamB.goals_against += match.team_a_score;

      if (match.team_a_score > match.team_b_score) {
        teamA.wins++;
        teamA.points += 3;

        teamB.losses++;
      } else if (match.team_a_score < match.team_b_score) {
        teamB.wins++;
        teamB.points += 3;

        teamA.losses++;
      } else {
        teamA.draws++;
        teamB.draws++;

        teamA.points++;
        teamB.points++;
      }
    }

    for (const standing of Object.values(standingsMap)) {
      standing.goal_difference =
        standing.goals_for - standing.goals_against;

      await this.prisma.standings.update({
        where: {
          id: standing.id,
        },
        data: {
          played: standing.played,
          wins: standing.wins,
          draws: standing.draws,
          losses: standing.losses,
          goals_for: standing.goals_for,
          goals_against: standing.goals_against,
          goal_difference: standing.goal_difference,
          points: standing.points,
        },
      });
    }
  }

   async update(
    matchId: string,
    organizerId: string,
    updateMatchDto: UpdateMatchDto,
  ) {
    const match = await this.prisma.match.findFirst({
      where: {
        id: matchId,
      },
      include: {
        tournament: true,
      },
    });

    if (!match) {
      throw new BadRequestException(
        'Match not found',
      );
    }

    if (
      match.tournament.organizer_id !== organizerId
    ) {
      throw new BadRequestException(
        'Unauthorized',
      );
    }

    return this.prisma.match.update({
      where: {
        id: matchId,
      },
      data: {
        match_date: updateMatchDto.match_date
          ? new Date(updateMatchDto.match_date)
          : undefined,
      },
    });
  }

}
import { BadRequestException, Injectable, } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateMatchEventDto } from './dto/create-match-event.dto';

@Injectable()
export class MatchEventsService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async create(
    organizerId: string,
    matchId: string,
    createMatchEventDto: CreateMatchEventDto,
  ) {
    const match = await this.prisma.match.findUnique({
      where: {
        id: matchId,
      },
      include: {
        tournament: true,
      },
    });

    if (!match) {
      throw new BadRequestException('Match not found');
    }

    if (match.tournament.organizer_id !== organizerId) {
      throw new BadRequestException('Unauthorized');
    }

    const isTeamInMatch =
      createMatchEventDto.team_id === match.team_a_id ||
      createMatchEventDto.team_id === match.team_b_id;

    if (!isTeamInMatch) {
      throw new BadRequestException(
        'Team does not belong to this match',
      );
    }

    return this.prisma.matchEvent.create({
      data: {
        match_id: match.id,
        tournament_id: match.tournament_id,
        team_id: createMatchEventDto.team_id,
        type: createMatchEventDto.type,
        player_name: createMatchEventDto.player_name,
      },
    });
  }

  async findAll(
    matchId: string,
  ) {
    const match = await this.prisma.match.findUnique({
      where: {
        id: matchId,
      },
    });

    if (!match) {
      throw new BadRequestException(
        'Match not found',
      );
    }

    return this.prisma.matchEvent.findMany({
      where: {
        match_id: matchId,
      },
      include: {
        team: true,
      },
      orderBy: {
        created_at: 'asc',
      },
    });
  }

  async findOne(
    id: string,
  ) {
    const event =
      await this.prisma.matchEvent.findUnique({
        where: {
          id,
        },
        include: {
          team: true,
          match: true,
        },
      });

    if (!event) {
      throw new BadRequestException(
        'Event not found',
      );
    }

    return event;
  }

  async delete(
    organizerId: string,
    id: string,
  ) {
    const event = await this.prisma.matchEvent.findUnique({
      where: {
        id,
      },
      include: {
        tournament: true,
      },
    });

    if (!event) {
      throw new BadRequestException('Event not found');
    }

    if (event.tournament.organizer_id !== organizerId) {
      throw new BadRequestException('Unauthorized');
    }

    return this.prisma.matchEvent.delete({
      where: {
        id,
      },
    });
  }
}
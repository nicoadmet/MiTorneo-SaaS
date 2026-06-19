import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';

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
}

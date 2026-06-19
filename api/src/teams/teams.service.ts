import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTeamDto } from './dto/create-team.dto';

@Injectable()
export class TeamsService {
  constructor(private prisma: PrismaService) {}

    async create(
        createTeamDto: CreateTeamDto,
        organizerId: string,
    ) {
        const tournament = await this.prisma.tournament.findFirst({
            where: {
            id: createTeamDto.tournament_id,
            organizer_id: organizerId,
            },
        });

        if (!tournament) {
            throw new NotFoundException('Tournament not found');
        }

        return this.prisma.team.create({
            data: {
            name: createTeamDto.name,
            logo_url: createTeamDto.logo_url,
            tournament_id: createTeamDto.tournament_id,
            },
        });
    }

    async findByTournament(
      tournamentId: string,
    ) {
      return this.prisma.team.findMany({
        where: {
          tournament_id: tournamentId,
        },
      });
    }
  
}
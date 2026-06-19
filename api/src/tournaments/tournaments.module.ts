import { Module } from '@nestjs/common';
import { TournamentsController } from './tournaments.controller';
import { TournamentsService } from './tournaments.service';
import { PrismaModule } from '../prisma/prisma.module';
import { TeamsModule } from '../teams/teams.module';
import { MatchesModule } from '../matches/matches.module';

@Module({
  imports: [
    PrismaModule,
    TeamsModule,
    MatchesModule,
  ],
  controllers: [TournamentsController],
  providers: [TournamentsService],
})
export class TournamentsModule {}

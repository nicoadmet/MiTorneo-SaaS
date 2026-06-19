import { Module } from '@nestjs/common';
import { OrganizerModule } from './organizer/organizer.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { TournamentsModule } from './tournaments/tournaments.module';
import { TeamsModule } from './teams/teams.module';
import { TeamsService } from './teams/teams.service';
import { MatchesModule } from './matches/matches.module';


@Module({
  imports: [OrganizerModule, PrismaModule, AuthModule, TournamentsModule, TeamsModule, MatchesModule],
  controllers: [],
  providers: [TeamsService],
})
export class AppModule {}

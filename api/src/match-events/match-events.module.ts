import { Module } from '@nestjs/common';
import { MatchEventsService } from './match-events.service';
import { MatchEventsController } from './match-events.controller';

@Module({
  providers: [MatchEventsService],
  controllers: [MatchEventsController]
})
export class MatchEventsModule {}

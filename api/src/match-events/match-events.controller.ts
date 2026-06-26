import { Body, Controller, Request, Get, Param, Post, Delete, UseGuards, } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { MatchEventsService } from './match-events.service';
import { CreateMatchEventDto } from './dto/create-match-event.dto';

@Controller('matches/:matchId/events')
export class MatchEventsController {
  constructor(
    private readonly matchEventsService: MatchEventsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Param('matchId') matchId: string,
    @Body() createMatchEventDto: CreateMatchEventDto,
    @Request() req: any,
  ) {
    return this.matchEventsService.create(
      req.user.id,
      matchId,
      createMatchEventDto,
    );
  }

  @Get()
  findAll(
    @Param('matchId') matchId: string,
  ) {
    return this.matchEventsService.findAll(
      matchId,
    );
  }

  @Get(':eventId')
  findOne(
  @Param('eventId') eventId: string,
  ) {
  return this.matchEventsService.findOne(
      eventId,
  );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':eventId')
  delete(
    @Param('eventId') eventId: string,
    @Request() req: any,
  ) {
    return this.matchEventsService.delete(
      req.user.id,
      eventId,
    );
  }
}

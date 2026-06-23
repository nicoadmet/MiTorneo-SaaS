import { Body, Controller, Post, Get, Patch, Request, UseGuards, Param, Delete } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { TournamentsService } from './tournaments.service';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { TeamsService } from '../teams/teams.service';
import { MatchesService } from '../matches/matches.service';

@Controller('tournaments')
export class TournamentsController {
  constructor(private tournamentsService: TournamentsService, private teamsService: TeamsService, private matchesService: MatchesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createTournamentDto: CreateTournamentDto,
    @Request() req: any,
  ) {
    return this.tournamentsService.create(createTournamentDto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(
    @Request() req: any,
  ) {
    return this.tournamentsService.findAll(req.user.id)
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Request() req: any,
  ) {
    return this.tournamentsService.findOne(
      id,
      req.user.id,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTournamentDto: UpdateTournamentDto,
    @Request() req: any,
  ) {
    return this.tournamentsService.update(
      id,
      req.user.id,
      updateTournamentDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(
    @Param('id') id: string,
    @Request() req: any,
  ) {
    return this.tournamentsService.delete(
      id,
      req.user.id,
    );
  }

  @Get(':id/teams')
  findTeams(
    @Param('id') id: string,
  ) {
    return this.teamsService.findByTournament(id);
  }

  @Get(':id/matches')
  findMatches(
    @Param('id') id: string,
  ) {
    return this.matchesService.findByTournament(id);
  }

  @Get(':id/standings')
  getStandings(
    @Param('id') id: string,
  ) {
    return this.tournamentsService.getStandings(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/generate-fixture')
  generateFixture(
    @Param('id') id: string,
    @Request() req: any,
  ) {
    return this.tournamentsService.generateFixture(
      id,
      req.user.id,
    );
  }
}

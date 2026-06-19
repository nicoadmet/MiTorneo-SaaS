import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createTeamDto: CreateTeamDto,
    @Request() req: any,
  ) {
    return this.teamsService.create(
      createTeamDto,
      req.user.id,
    );
  }
}
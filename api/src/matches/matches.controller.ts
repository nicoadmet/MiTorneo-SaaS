import { Body, Controller, Post, Patch, Request, UseGuards, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateMatchDto } from './dto/create-match.dto';
import { MatchesService } from './matches.service';
import { UpdateMatchResultDto } from './dto/update-match-result.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

@Controller('matches')
export class MatchesController {
  constructor(
    private matchesService: MatchesService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createMatchDto: CreateMatchDto,
    @Request() req: any,
  ) {
    return this.matchesService.create(
      createMatchDto,
      req.user.id,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/result')
  updateResult(
    @Param('id') id: string,
    @Body() dto: UpdateMatchResultDto,
    @Request() req: any,
  ) {
    return this.matchesService.updateResult(
      id,
      req.user.id,
      dto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMatchDto: UpdateMatchDto,
    @Request() req: any,
  ) {
    return this.matchesService.update(
      id,
      req.user.id,
      updateMatchDto,
    );
  }
}
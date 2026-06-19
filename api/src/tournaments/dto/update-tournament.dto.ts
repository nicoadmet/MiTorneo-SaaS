import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { TournamentFormat } from '@prisma/client';

export class UpdateTournamentDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(TournamentFormat)
  format?: TournamentFormat;

  @IsOptional()
  @IsInt()
  playoff_teams?: number;
}
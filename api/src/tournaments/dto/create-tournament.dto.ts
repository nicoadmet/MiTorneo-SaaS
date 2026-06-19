import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { TournamentFormat } from '@prisma/client';

export class CreateTournamentDto {
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(TournamentFormat)
  format!: TournamentFormat;

  @IsOptional()
  @IsInt()
  playoff_teams?: number;
}

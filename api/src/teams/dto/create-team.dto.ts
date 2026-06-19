import { IsOptional, IsString } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  logo_url?: string;

  @IsString()
  tournament_id!: string;
}
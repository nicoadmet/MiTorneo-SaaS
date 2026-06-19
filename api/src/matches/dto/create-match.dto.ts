import { IsDateString, IsString } from 'class-validator';

export class CreateMatchDto {
  @IsString()
  tournament_id!: string;

  @IsString()
  team_a_id!: string;

  @IsString()
  team_b_id!: string;

  @IsDateString()
  match_date!: string;
}
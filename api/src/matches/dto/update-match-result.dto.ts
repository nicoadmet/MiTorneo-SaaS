import { IsInt, Min } from 'class-validator';

export class UpdateMatchResultDto {
  @IsInt()
  @Min(0)
  team_a_score!: number;

  @IsInt()
  @Min(0)
  team_b_score!: number;
}
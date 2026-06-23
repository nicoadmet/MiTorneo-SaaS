import { IsOptional, IsDateString } from 'class-validator';

export class UpdateMatchDto {
  @IsOptional()
  @IsDateString()
  match_date?: string;
}
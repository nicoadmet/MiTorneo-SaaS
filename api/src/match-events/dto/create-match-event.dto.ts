import { IsEnum, IsString, IsUUID } from 'class-validator';
import { EventType } from '@prisma/client';

export class CreateMatchEventDto {
  @IsUUID()
  team_id!: string;

  @IsEnum(EventType)
  type!: EventType;

  @IsString()
  player_name!: string;
}

import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateOrganizerDto {
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  email!: string;

  @MinLength(6)
  password!: string;
}

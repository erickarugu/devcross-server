import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserInput {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ required: true })
  @IsEmail()
  email: string;
}

export class UpdateUserInput extends PartialType(
  OmitType(CreateUserInput, ['username', 'email']),
) {
  lastSeenAt?: Date;
  lastPlayedAt?: Date;
  currentStreak?: number;
  bestStreak?: number;
  totalPoints?: number;
  gamesWon?: number;
  gamesPlayed?: number;
}

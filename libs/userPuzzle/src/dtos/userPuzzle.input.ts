import {
  ApiHideProperty,
  ApiProperty,
  OmitType,
  PartialType,
} from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateUserPuzzleInput {
  @ApiHideProperty()
  completedAt: Date;

  @ApiHideProperty()
  totalQuestionsAnswered: number;

  @ApiHideProperty()
  totalPoints: number;

  @ApiProperty({ required: true })
  @IsUUID()
  puzzleId: string;

  @ApiProperty({ required: true })
  @IsUUID()
  userId: string;
}

export class UpdateUserPuzzleInput extends OmitType(
  PartialType(CreateUserPuzzleInput),
  ['userId', 'puzzleId'],
) {}

import {
  ApiHideProperty,
  ApiProperty,
  OmitType,
  PartialType,
} from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateLeaderboardInput {
  @ApiHideProperty()
  totalPoints: number;

  @ApiHideProperty()
  puzzlesCompleted: number;

  @ApiHideProperty()
  week: Date;

  @ApiProperty({ required: true })
  @IsUUID()
  userId: string;
}

export class UpdateLeaderboardInput extends OmitType(
  PartialType(CreateLeaderboardInput),
  ['userId'],
) {}

import { ApiProperty } from '@nestjs/swagger';
import { Puzzle as PrismaPuzzle } from '@prisma/client';
import { Column, Entity } from 'typeorm';

import { BaseEntity } from './base.entity';
import { UserPuzzle } from './user-puzzle.entity';

@Entity('puzzles')
export class Puzzle extends BaseEntity implements PrismaPuzzle {
  @ApiProperty({})
  @Column({ name: 'puzzle_id', type: 'uuid' })
  puzzleId: string;

  @ApiProperty()
  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @ApiProperty()
  @Column({ name: 'week', type: 'timestamptz' })
  week: Date;

  //********************* RESOLVER FIELDS ***************/
  @ApiProperty({ type: () => [UserPuzzle] })
  userPuzzles?: UserPuzzle[];
}

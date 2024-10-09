import { ApiProperty } from '@nestjs/swagger';
import { UserPuzzle as PrismaUserPuzzle } from '@prisma/client';
import { Column, Entity } from 'typeorm';

import { BaseEntity } from './base.entity';
import { Puzzle } from './puzzle.entity';
import { User } from './user.entity';

@Entity('user_puzzles')
export class UserPuzzle extends BaseEntity implements PrismaUserPuzzle {
  @ApiProperty({ nullable: true })
  @Column({ name: 'completed_at', type: 'timestamptz', nullable: true })
  completedAt: Date;

  @ApiProperty()
  @Column({ name: 'total_questions_answered', type: 'integer', default: 0 })
  totalQuestionsAnswered: number;

  @ApiProperty()
  @Column({ name: 'total_points', type: 'integer', default: 0 })
  totalPoints: number;

  @ApiProperty()
  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;

  @ApiProperty()
  @Column({ name: 'puzzle_id', type: 'uuid' })
  puzzleId: string;

  //********************* RESOLVER FIELDS ***************/
  @ApiProperty({ type: () => User })
  user?: User;

  @ApiProperty({ type: () => Puzzle })
  puzzle?: Puzzle;
}

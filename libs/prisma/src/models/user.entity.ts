import { ApiProperty } from '@nestjs/swagger';
import { User as PrismaUser } from '@prisma/client';
import { Column, Entity } from 'typeorm';

import { BaseEntity } from './base.entity';
import { LeaderBoard } from './leaderboard.entity';
import { UserPuzzle } from './user-puzzle.entity';

@Entity('users')
export class User extends BaseEntity implements PrismaUser {
  @ApiProperty()
  @Column()
  username: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column({ name: 'last_seen_at', type: 'timestamptz' })
  lastSeenAt: Date;

  @ApiProperty()
  @Column({ name: 'last_played_at', type: 'timestamptz' })
  lastPlayedAt: Date;

  @ApiProperty()
  @Column({ name: 'current_streak', type: 'integer', default: 0 })
  currentStreak: number;

  @ApiProperty()
  @Column({ name: 'best_streak', type: 'integer', default: 0 })
  bestStreak: number;

  @ApiProperty()
  @Column({ name: 'total_points', type: 'integer', default: 0 })
  totalPoints: number;

  @ApiProperty()
  @Column({ name: 'games_won', type: 'integer', default: 0 })
  gamesWon: number;

  @ApiProperty()
  @Column({ name: 'games_played', type: 'integer', default: 0 })
  gamesPlayed: number;

  //********************* RESOLVER FIELDS ***************/
  @ApiProperty({ type: () => UserPuzzle, isArray: true })
  puzzles?: UserPuzzle[];

  @ApiProperty({ type: () => LeaderBoard, isArray: true })
  leaderboards?: LeaderBoard[];
}

import { ApiProperty } from '@nestjs/swagger';
import { LeaderBoard as PrismaLeaderBoard } from '@prisma/client';
import { Column, Entity } from 'typeorm';

import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity('leaderboards')
export class LeaderBoard extends BaseEntity implements PrismaLeaderBoard {
  @ApiProperty()
  @Column({ name: 'total_points', type: 'integer', default: 0 })
  totalPoints: number;

  @ApiProperty()
  @Column({ name: 'puzzles_completed', type: 'integer', default: 0 })
  puzzlesCompleted: number;

  @ApiProperty()
  @Column({ name: 'week', type: 'timestamptz' })
  week: Date;

  @ApiProperty()
  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;

  //********************* RESOLVER FIELDS ***************/
  @ApiProperty({ type: () => User })
  user?: User;
}

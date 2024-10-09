import { PrismaModule } from '@app/prisma';
import { Module } from '@nestjs/common';

import { LeaderboardController } from './leaderboard.controller';
import { LeaderboardService } from './leaderboard.service';
import { LeaderBoardUseCase } from './leaderboard.usecase';

@Module({
  imports: [PrismaModule],
  controllers: [LeaderboardController],
  providers: [LeaderboardService, LeaderBoardUseCase],
  exports: [LeaderboardService],
})
export class LeaderboardModule {}

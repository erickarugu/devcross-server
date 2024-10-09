import { Injectable } from '@nestjs/common';

import { LeaderboardService } from './leaderboard.service';

@Injectable()
export class LeaderBoardUseCase {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  async getLeaderboards() {
    return this.leaderboardService.getLeaderboards({
      args: {
        include: {
          user: true,
        },
      },
    });
  }

  async getLeaderboard({ leaderboardId }: { leaderboardId: string }) {
    return this.leaderboardService.getLeaderboardOrThrow({
      where: { id: leaderboardId },
    });
  }
}

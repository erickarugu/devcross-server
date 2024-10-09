import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { LeaderBoardUseCase } from './leaderboard.usecase';

@Controller('leaderboards')
@ApiTags('Leaderboard APIs')
export class LeaderboardController {
  constructor(private readonly leaderboarUseCase: LeaderBoardUseCase) {}

  @Get()
  async getLeaderboards() {
    return this.leaderboarUseCase.getLeaderboards();
  }

  @Get(':leaderboardId')
  async getLeaderboard(@Param('leaderboardId') leaderboardId: string) {
    return this.leaderboarUseCase.getLeaderboard({ leaderboardId });
  }
}

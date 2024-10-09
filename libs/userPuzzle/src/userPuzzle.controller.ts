import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserPuzzleUseCase } from './userPuzzle.usecase';

@Controller('user-puzzles')
@ApiTags('User Puzzle APIs')
export class UserPuzzleController {
  constructor(private readonly userPuzzleUseCase: UserPuzzleUseCase) {}

  @Get()
  async getUserPuzzles() {
    return this.userPuzzleUseCase.getUserPuzzles();
  }

  @Get(':userPuzzleId')
  async getUserPuzzle(@Param('userPuzzleId') userPuzzleId: string) {
    return this.userPuzzleUseCase.getUserPuzzle({ userPuzzleId });
  }
}

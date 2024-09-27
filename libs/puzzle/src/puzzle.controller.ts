import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';

import { PuzzleUsecase } from './puzzle.usecase';

@Controller('puzzles')
@ApiTags('Puzzle APIs')
export class PuzzleController {
  constructor(private readonly puzzleUseCase: PuzzleUsecase) {}

  @Get()
  async getPuzzles() {
    return this.puzzleUseCase.getPuzzles();
  }

  @Get('latest')
  async getLatestPuzzle() {
    return this.puzzleUseCase.getLatestPuzzle();
  }

  @Get(':puzzleId')
  @ApiParam({
    name: 'puzzleId',
    required: true,
  })
  async getPuzzle(@Param('puzzleId') puzzleId: string) {
    return this.puzzleUseCase.getPuzzle({ puzzleId });
  }
}

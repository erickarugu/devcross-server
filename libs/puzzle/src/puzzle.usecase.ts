import { BadRequestException, Injectable } from '@nestjs/common';

import { CreatePuzzleInput, UpdatePuzzleInput } from './dtos/puzzle.input';
import { PuzzleService } from './puzzle.service';

@Injectable()
export class PuzzleUsecase {
  constructor(private readonly puzzleService: PuzzleService) {}

  async getPuzzles() {
    return this.puzzleService.getPuzzles({});
  }

  async getLatestPuzzle() {
    return this.puzzleService.getPuzzle({
      where: {
        isActive: true,
      },
    });
  }
  async getPuzzle({ puzzleId }: { puzzleId: string }) {
    return this.puzzleService.getPuzzleOrThrow({ where: { puzzleId } });
  }

  async createPuzzle(input: CreatePuzzleInput) {
    return this.puzzleService.createPuzzle({ input });
  }

  async updatePuzzle({
    puzzleId,
    input,
  }: {
    puzzleId: string;
    input: UpdatePuzzleInput;
  }) {
    const puzzle = await this.puzzleService.getPuzzle({ where: { puzzleId } });

    if (!puzzle) {
      throw new BadRequestException('Puzzle not found');
    }

    return this.puzzleService.updatePuzzle({
      where: { id: puzzle.id },
      input,
    });
  }

  async deletePuzzle({ puzzleId }: { puzzleId: string }) {
    const puzzle = await this.puzzleService.getPuzzle({ where: { puzzleId } });

    if (!puzzle) {
      throw new BadRequestException('Puzzle not found');
    }

    return this.puzzleService.deletePuzzle({ where: { id: puzzle.id } });
  }
}

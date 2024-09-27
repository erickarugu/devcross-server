import { PrismaService } from '@app/prisma';
import { HttpException, Injectable, NotFoundException } from '@nestjs/common';

import {
  CreatePuzzleOptions,
  DeletePuzzleOptions,
  GetPuzzleOptions,
  GetPuzzlesOptions,
  UpdatePuzzleOptions,
} from './types';

@Injectable()
export class PuzzleService {
  constructor(private readonly prismaService: PrismaService) {}

  async getPuzzle(options: GetPuzzleOptions) {
    const { where, select } = options;

    try {
      return await this.prismaService.puzzle.findFirst({
        where,
        select,
      });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async getPuzzleOrThrow(options: GetPuzzleOptions) {
    const puzzle = await this.getPuzzle(options);

    if (!puzzle) {
      throw new NotFoundException('Puzzle not found');
    }

    return puzzle;
  }

  async getPuzzles(options: GetPuzzlesOptions) {
    const { where, select } = options;

    try {
      return await this.prismaService.puzzle.findMany({
        where,
        select,
      });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async createPuzzle(options: CreatePuzzleOptions) {
    const { input, select } = options;

    try {
      return await this.prismaService.puzzle.create({
        data: {
          ...input,
        },
        select,
      });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async updatePuzzle(options: UpdatePuzzleOptions) {
    const { where, input, select } = options;

    try {
      return await this.prismaService.puzzle.update({
        where,
        data: {
          ...input,
        },
        select,
      });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async deletePuzzle(options: DeletePuzzleOptions) {
    const { where } = options;

    try {
      return await this.prismaService.puzzle.delete({
        where,
      });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}

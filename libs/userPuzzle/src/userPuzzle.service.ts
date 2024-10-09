import { PrismaService } from '@app/prisma';
import { UserPuzzle } from '@app/prisma/models';
import { HttpException, Injectable, NotFoundException } from '@nestjs/common';

import {
  CreateUserPuzzleOptions,
  DeleteUserPuzzleOptions,
  GetUserPuzzleOptions,
  GetUserPuzzlesOptions,
  UpdateUserPuzzleOptions,
} from './types';

@Injectable()
export class UserPuzzleService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUserPuzzle(
    options: GetUserPuzzleOptions,
  ): Promise<UserPuzzle | null> {
    const { where, select } = options;

    try {
      return await this.prismaService.userPuzzle.findFirst({
        where,
        select,
      });
    } catch (err: any) {
      throw new HttpException(err.message, 500);
    }
  }

  async getUserPuzzleOrThrow(
    options: GetUserPuzzleOptions,
  ): Promise<UserPuzzle | NotFoundException> {
    try {
      const userPuzzle = await this.getUserPuzzle(options);

      if (!userPuzzle) {
        throw new NotFoundException('UserPuzzle not found');
      }

      return userPuzzle;
    } catch (err: any) {
      throw new HttpException(err.message, 500);
    }
  }

  async getUserPuzzles(options: GetUserPuzzlesOptions): Promise<UserPuzzle[]> {
    const { where, select, args } = options;

    try {
      return await this.prismaService.userPuzzle.findMany({
        where,
        select,
        ...args,
      });
    } catch (err: any) {
      throw new HttpException(err.message, 500);
    }
  }

  async createUserPuzzle(
    options: CreateUserPuzzleOptions,
  ): Promise<UserPuzzle> {
    const { input, select } = options;

    const { userId, puzzleId, ...restInput } = input;

    try {
      return await this.prismaService.userPuzzle.create({
        data: {
          ...restInput,
          user: { connect: { id: userId } },
          puzzle: { connect: { id: puzzleId } },
        },
        select,
      });
    } catch (err: any) {
      throw new HttpException(err.message, 500);
    }
  }

  async updateUserPuzzle(
    options: UpdateUserPuzzleOptions,
  ): Promise<UserPuzzle> {
    const { where, input, select } = options;

    try {
      return await this.prismaService.userPuzzle.update({
        where,
        data: {
          ...input,
        },
        select,
      });
    } catch (err: any) {
      throw new HttpException(err.message, 500);
    }
  }

  async deleteUserPuzzle(
    options: DeleteUserPuzzleOptions,
  ): Promise<UserPuzzle> {
    const { where } = options;

    try {
      return await this.prismaService.userPuzzle.delete({
        where,
      });
    } catch (err: any) {
      throw new HttpException(err.message, 500);
    }
  }
}

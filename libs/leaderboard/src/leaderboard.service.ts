import { PrismaService } from '@app/prisma';
import { LeaderBoard } from '@app/prisma/models';
import { HttpException, Injectable, NotFoundException } from '@nestjs/common';

import {
  CreateLeaderboardOptions,
  DeleteLeaderboardOptions,
  GetLeaderboardOptions,
  GetLeaderboardsOptions,
  UpdateLeaderboardOptions,
} from './types';

@Injectable()
export class LeaderboardService {
  constructor(private readonly prismaService: PrismaService) {}

  async getLeaderboard(
    options: GetLeaderboardOptions,
  ): Promise<LeaderBoard | null> {
    const { where, select } = options;

    try {
      return await this.prismaService.leaderBoard.findFirst({
        where,
        select,
      });
    } catch (err: any) {
      throw new HttpException(err.message, 500);
    }
  }

  async getLeaderboardOrThrow(
    options: GetLeaderboardOptions,
  ): Promise<LeaderBoard | NotFoundException> {
    try {
      const leaderboard = await this.getLeaderboard(options);

      if (!leaderboard) {
        throw new NotFoundException('Leaderboard not found');
      }

      return leaderboard;
    } catch (err: any) {
      throw new HttpException(err.message, 500);
    }
  }

  async getLeaderboards(
    options: GetLeaderboardsOptions,
  ): Promise<LeaderBoard[]> {
    const { where, select, args } = options;

    try {
      return await this.prismaService.leaderBoard.findMany({
        where,
        select,
        ...args,
      });
    } catch (err: any) {
      throw new HttpException(err.message, 500);
    }
  }

  async createLeaderboard(
    options: CreateLeaderboardOptions,
  ): Promise<LeaderBoard> {
    const { input, select } = options;

    const { userId, ...restInput } = input;

    try {
      return await this.prismaService.leaderBoard.create({
        data: {
          ...restInput,
          user: { connect: { id: userId } },
        },
        select,
      });
    } catch (err: any) {
      throw new HttpException(err.message, 500);
    }
  }

  async updateLeaderboard(
    options: UpdateLeaderboardOptions,
  ): Promise<LeaderBoard> {
    const { where, input, select } = options;

    try {
      return await this.prismaService.leaderBoard.update({
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

  async deleteLeaderboard(
    options: DeleteLeaderboardOptions,
  ): Promise<LeaderBoard> {
    const { where } = options;

    try {
      return await this.prismaService.leaderBoard.delete({
        where,
      });
    } catch (err: any) {
      throw new HttpException(err.message, 500);
    }
  }
}

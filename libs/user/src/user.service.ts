import { PrismaService } from '@app/prisma';
import { HttpException, Injectable, NotFoundException } from '@nestjs/common';

import {
  CreateUserOptions,
  DeleteUserOptions,
  GetUserOptions,
  GetUsersOptions,
  UpdateUserOptions,
} from './types';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUser(options: GetUserOptions) {
    const { where, select } = options;

    try {
      return await this.prismaService.user.findFirst({
        where,
        select,
      });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async getUserOrThrow(options: GetUserOptions) {
    const user = await this.getUser(options);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async getUsers(options: GetUsersOptions) {
    const { where, select, args } = options;

    try {
      return await this.prismaService.user.findMany({
        where,
        select,
        skip: args?.skip,
        take: args?.take,
      });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async createUser(options: CreateUserOptions) {
    const { input, select } = options;

    try {
      return await this.prismaService.user.create({
        data: {
          ...input,
        },
        select,
      });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async updateUser(options: UpdateUserOptions) {
    const { where, input, select } = options;

    try {
      return await this.prismaService.user.update({
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

  async deleteUser(options: DeleteUserOptions) {
    const { where } = options;

    try {
      return await this.prismaService.user.delete({
        where,
      });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';

import { UserService } from './user.service';

@Injectable()
export class UserUsecase {
  constructor(private readonly userService: UserService) {}

  async getUsers() {
    return this.userService.getUsers({
      args: {
        skip: 230,
        take: 100,
      },
    });
  }

  async getUser({ id }: { id: string }) {
    return this.userService.getUserOrThrow({ where: { id } });
  }

  async createUser(input: any) {
    return this.userService.createUser({ input });
  }

  async updateUser({ id, input }: { id: string; input: any }) {
    const user = await this.userService.getUser({ where: { id } });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return this.userService.updateUser({
      where: { id: user.id },
      input,
    });
  }

  async deleteUser({ id }: { id: string }) {
    const user = await this.userService.getUser({ where: { id } });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return this.userService.deleteUser({ where: { id: user.id } });
  }
}

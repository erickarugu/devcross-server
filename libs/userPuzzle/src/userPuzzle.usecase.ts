import { Injectable } from '@nestjs/common';

import { UserPuzzleService } from './userPuzzle.service';

@Injectable()
export class UserPuzzleUseCase {
  constructor(private readonly userPuzzleService: UserPuzzleService) {}

  async getUserPuzzles() {
    return this.userPuzzleService.getUserPuzzles({
      args: {
        take: 150,
        include: {
          puzzle: true,
          user: true,
        },
      },
    });
  }

  async getUserPuzzle({ userPuzzleId }: { userPuzzleId: string }) {
    return this.userPuzzleService.getUserPuzzleOrThrow({
      where: { id: userPuzzleId },
    });
  }
}

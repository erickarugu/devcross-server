import { PrismaModule } from '@app/prisma';
import { Module } from '@nestjs/common';

import { UserPuzzleController } from './userPuzzle.controller';
import { UserPuzzleService } from './userPuzzle.service';
import { UserPuzzleUseCase } from './userPuzzle.usecase';

@Module({
  imports: [PrismaModule],
  controllers: [UserPuzzleController],
  providers: [UserPuzzleService, UserPuzzleUseCase],
  exports: [UserPuzzleService],
})
export class UserPuzzleModule {}

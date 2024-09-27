import { PrismaModule } from '@app/prisma';
import { Module } from '@nestjs/common';

import { PuzzleController } from './puzzle.controller';
import { PuzzleService } from './puzzle.service';
import { PuzzleUsecase } from './puzzle.usecase';

@Module({
  imports: [PrismaModule],
  controllers: [PuzzleController],
  providers: [PuzzleService, PuzzleUsecase],
  exports: [PuzzleService],
})
export class PuzzleModule {}

import { PartialType } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreatePuzzleInput implements Prisma.PuzzleUncheckedCreateInput {
  puzzleId: string;
  week: Date;
  isActive: boolean;
}

export class UpdatePuzzleInput extends PartialType(CreatePuzzleInput) {}

import { Prisma } from '@prisma/client';

import { CreatePuzzleInput, UpdatePuzzleInput } from '../dtos/puzzle.input';

export type GetPuzzleOptions = {
  where?: Prisma.PuzzleWhereInput;
  select?: Prisma.PuzzleSelect;
};

export type GetPuzzlesOptions = {
  where?: Prisma.PuzzleWhereInput;
  select?: Prisma.PuzzleSelect;
};

export type CreatePuzzleOptions = {
  select?: Prisma.PuzzleSelect;
  input: CreatePuzzleInput;
};

export type UpdatePuzzleOptions = {
  where: Prisma.PuzzleWhereUniqueInput;
  select?: Prisma.PuzzleSelect;
  input: UpdatePuzzleInput;
};

export type DeletePuzzleOptions = {
  where: Prisma.PuzzleWhereUniqueInput;
};

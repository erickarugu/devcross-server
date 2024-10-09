import {
  CreateUserPuzzleInput,
  UpdateUserPuzzleInput,
} from '@app/userPuzzle/dtos';
import { Prisma } from '@prisma/client';

export type GetUserPuzzleOptions = {
  where?: Prisma.UserPuzzleWhereInput;
  select?: Prisma.UserPuzzleSelect;
};

export type GetUserPuzzlesOptions = {
  where?: Prisma.UserPuzzleWhereInput;
  select?: Prisma.UserPuzzleSelect;
  args?: Prisma.UserPuzzleFindManyArgs;
};

export type CreateUserPuzzleOptions = {
  select?: Prisma.UserPuzzleSelect;
  input: CreateUserPuzzleInput;
};

export type UpdateUserPuzzleOptions = {
  where: Prisma.UserPuzzleWhereUniqueInput;
  select?: Prisma.UserPuzzleSelect;
  input: UpdateUserPuzzleInput;
};

export type DeleteUserPuzzleOptions = {
  where: Prisma.UserPuzzleWhereUniqueInput;
};

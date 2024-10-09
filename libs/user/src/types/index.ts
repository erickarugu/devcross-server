import { CreateUserInput, UpdateUserInput } from '@app/user/dtos';
import { Prisma } from '@prisma/client';

export type GetUserOptions = {
  where?: Prisma.UserWhereInput;
  select?: Prisma.UserSelect;
};

export type GetUsersOptions = {
  where?: Prisma.UserWhereInput;
  select?: Prisma.UserSelect;
  args?: Prisma.UserFindManyArgs;
};

export type CreateUserOptions = {
  select?: Prisma.UserSelect;
  input: CreateUserInput;
};

export type UpdateUserOptions = {
  where: Prisma.UserWhereUniqueInput;
  select?: Prisma.UserSelect;
  input: UpdateUserInput;
};

export type DeleteUserOptions = {
  where: Prisma.UserWhereUniqueInput;
};

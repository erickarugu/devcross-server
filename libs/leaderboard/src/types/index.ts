import {
  CreateLeaderboardInput,
  UpdateLeaderboardInput,
} from '@app/leaderboard/dtos';
import { Prisma } from '@prisma/client';

export type GetLeaderboardOptions = {
  where?: Prisma.LeaderBoardWhereInput;
  select?: Prisma.LeaderBoardSelect;
};

export type GetLeaderboardsOptions = {
  where?: Prisma.LeaderBoardWhereInput;
  select?: Prisma.LeaderBoardSelect;
  args?: Prisma.LeaderBoardFindManyArgs;
};

export type CreateLeaderboardOptions = {
  select?: Prisma.LeaderBoardSelect;
  input: CreateLeaderboardInput;
};

export type UpdateLeaderboardOptions = {
  where: Prisma.LeaderBoardWhereUniqueInput;
  select?: Prisma.LeaderBoardSelect;
  input: UpdateLeaderboardInput;
};

export type DeleteLeaderboardOptions = {
  where: Prisma.LeaderBoardWhereUniqueInput;
};

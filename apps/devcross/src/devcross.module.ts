import { AuthModule } from '@app/auth';
import { LoggerModule } from '@app/common';
import { LeaderboardModule } from '@app/leaderboard';
import { PrismaModule } from '@app/prisma';
import { PuzzleModule } from '@app/puzzle';
import { UserModule } from '@app/user';
import { UserPuzzleModule } from '@app/userPuzzle';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
    }),
    LoggerModule,
    UserModule,
    PuzzleModule,
    LeaderboardModule,
    UserPuzzleModule,
  ],
  controllers: [],
  providers: [],
})
export class DevcrossModule {}

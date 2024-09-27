import { LoggerModule } from '@app/common';
import { PrismaModule } from '@app/prisma/prisma.module';
import { PuzzleModule } from '@app/puzzle';
import { UserModule } from '@app/user';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
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
  ],
  controllers: [],
  providers: [],
})
export class DevcrossModule {}

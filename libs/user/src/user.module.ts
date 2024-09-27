import { PrismaModule } from '@app/prisma';
import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserUsecase } from './user.usecase';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, UserUsecase],
  exports: [UserService],
})
export class UserModule {}

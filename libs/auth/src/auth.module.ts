import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthUseCase } from './auth.usecase';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthUseCase],
  exports: [AuthService],
})
export class AuthModule {}

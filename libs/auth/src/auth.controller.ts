import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthUseCase } from './auth.usecase';

@Controller('auth')
@ApiTags('Auth APIs')
export class AuthController {
  constructor(private readonly authUseCase: AuthUseCase) {}

  @Post('login')
  async login() {
    return this.authUseCase.login();
  }

  @Post('register')
  async register() {
    return this.authUseCase.register();
  }
}

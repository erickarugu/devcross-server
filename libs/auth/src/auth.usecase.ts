import { Injectable } from '@nestjs/common';

import { AuthService } from './auth.service';

@Injectable()
export class AuthUseCase {
  constructor(private readonly authService: AuthService) {}

  async login() {
    return true;
  }

  async register() {
    return true;
  }
}

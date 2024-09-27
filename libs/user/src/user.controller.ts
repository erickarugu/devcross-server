import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

import { CreateUserInput } from './dtos/user.input';
import { UserUsecase } from './user.usecase';

@Controller('users')
@ApiTags('User APIs')
export class UserController {
  constructor(private readonly userUseCase: UserUsecase) {}

  @Get()
  async getuUser() {
    return this.userUseCase.getUsers();
  }

  @Get(':username')
  @ApiParam({
    name: 'username',
    required: true,
  })
  async getUsers(@Param('username') username: string) {
    return this.userUseCase.getUser({ username });
  }

  @Post()
  @ApiBody({ type: CreateUserInput })
  async createUser(@Body() input: CreateUserInput) {
    return this.userUseCase.createUser(input);
  }

  @Put(':username')
  @ApiParam({
    name: 'username',
    required: true,
  })
  async updateUser(
    @Body() input: CreateUserInput,
    @Param('username') username: string,
  ) {
    return this.userUseCase.updateUser({ username, input });
  }

  @Delete(':username')
  @ApiParam({
    name: 'username',
    required: true,
  })
  async deleteUser(@Param('username') username: string) {
    return this.userUseCase.deleteUser({ username });
  }
}

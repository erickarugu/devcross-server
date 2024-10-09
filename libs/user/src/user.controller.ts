import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';

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

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
  })
  async getUsers(@Param('id') id: string) {
    return this.userUseCase.getUser({ id });
  }

  @Put(':id')
  @ApiParam({
    name: 'id',
    required: true,
  })
  async updateUser(@Body() input: CreateUserInput, @Param('id') id: string) {
    return this.userUseCase.updateUser({ id, input });
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
  })
  async deleteUser(@Param('id') id: string) {
    return this.userUseCase.deleteUser({ id });
  }
}

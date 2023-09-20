import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';

import UserService from '../service/user.service';
import RegisterUserDto from '../dto/register-user.dto';
import UpdateUserDto from '../dto/update-user.dto';

@Controller('user')
@ApiTags('사용자 API')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  register(@Body() userDto: RegisterUserDto) {
    return this.userService.register(userDto);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Put(':id')
  updateById(@Param('id') id: string, @Body() userDto: UpdateUserDto) {
    return this.userService.update(id, userDto);
  }
}

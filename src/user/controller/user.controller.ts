import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';

import UserService from '../service/user.service';
import RegisterUserDto from '../dto/register-user.dto';

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
}

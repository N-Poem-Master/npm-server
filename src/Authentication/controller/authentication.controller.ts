import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import RequestLogin from 'src/authentication/dto/request-login.dto';
import AuthenticationService from '../service/authentication.service';
import { Response } from 'express';

import { Auth } from '../guard/Auth';

@Controller('auth')
@ApiTags('사용자 API')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('login')
  async login(@Body() requestLogin: RequestLogin, @Res() res: Response) {
    const token = await this.authService.login(requestLogin);
    res.cookie('access-token', token.accessToken);
    res.cookie('refresh-token', token.refreshToken);
    res.send(true);
  }

  @Auth()
  @Get()
  authTest() {
    return true;
  }
}

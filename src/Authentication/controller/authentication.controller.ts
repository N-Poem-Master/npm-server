import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger/dist';
import RequestLogin from 'src/authentication/dto/request-login.dto';
import AuthenticationService from '../service/authentication.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('auth')
@ApiTags('사용자 API')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('login')
  async login(@Body() requestLogin: RequestLogin, @Res() res: Response) {
    const token = await this.authService.login(requestLogin);
    res.cookie('access-token', token.accessToken);
    res.cookie('refresh-token', token.refreshToken);
    console.log(token);
    res.send(true);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard('access'))
  @Get()
  authTest() {
    return true;
  }
}

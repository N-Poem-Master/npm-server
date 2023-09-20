import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import AuthenticationService from '../service/authentication.service';

@Injectable()
class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor(private readonly authService: AuthenticationService) {
    super({
      jwtFromRequest: (req) => {
        const cookie = req.cookies['refreshToken'];
        return cookie;
      },
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  // TODO
  // async validate(loginData: RequestLogin) {}
}

export default JwtRefreshStrategy;

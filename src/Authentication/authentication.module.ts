import { Module } from '@nestjs/common';
import { AuthenticationController } from './controller/authentication.controller';
import AuthenticationService from './service/authentication.service';
import JWTRefreshStrategy from './strategy/jwt-refresh.strategy';
import JwtAccessStrategy from './strategy/jwt-access.strategy';
import UserModule from 'src/user/user.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UserModule],
  controllers: [AuthenticationController],
  providers: [
    JwtService,
    AuthenticationService,
    JwtAccessStrategy,
    JWTRefreshStrategy,
  ],
  exports: [JwtAccessStrategy, JWTRefreshStrategy],
})
export default class AuthenticationModule {}

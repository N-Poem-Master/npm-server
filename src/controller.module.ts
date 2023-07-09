import { Module } from '@nestjs/common';
import UserModule from './user/user.module';
import AuthenticationModule from './Authentication/authentication.module';

@Module({
  imports: [UserModule, AuthenticationModule],
  controllers: [],
  providers: [],
})
export class ControllerModule {}

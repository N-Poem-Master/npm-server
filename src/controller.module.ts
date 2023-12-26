import { Module } from '@nestjs/common';
import UserModule from './user/user.module';
import AuthenticationModule from './Authentication/authentication.module';
import { PoemModule } from './poem/poem.module';

@Module({
  imports: [UserModule, AuthenticationModule, PoemModule],
  controllers: [],
  providers: [],
})
export class ControllerModule {}

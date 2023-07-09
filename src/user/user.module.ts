import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/db/typeorm-ex.module';

import { UserController } from './controller/user.controller';
import UserService from './service/user.service';
import UserRepository from './repository/user.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmExModule],
})
export default class UserModule {}

import { Module } from '@nestjs/common';

import { PoemController } from './controller/poem.controller';
import { PoemService } from './service/poem.service';
import { TypeOrmExModule } from 'src/db/typeorm-ex.module';
import PoemRepository from './repository/poem.repository';
@Module({
  imports: [TypeOrmExModule.forCustomRepository([PoemRepository])],
  controllers: [PoemController],
  providers: [PoemService],
})
export class PoemModule {}

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoggerMiddleware } from './logger/logger.midleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControllerModule } from './controller.module';
import { typeORMConfig } from './db/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), ControllerModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

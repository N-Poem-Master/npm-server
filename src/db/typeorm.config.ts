import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'npm.db',
  autoLoadEntities: true,
  synchronize: true,
  logging: true,
  dropSchema: true,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
};

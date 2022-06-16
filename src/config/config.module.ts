//like app module
//install nest/config
//npm i --save @nestjs/config
//yarn add @nestjs/config
import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import DatabaseConfig from './database.config';
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [() => ({ database: DatabaseConfig() })],
    }),
  ],
})
export class ConfigModule {}

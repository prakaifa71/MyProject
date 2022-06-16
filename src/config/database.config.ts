//install typeorm and snake
//npm install --save @nestjs/typeorm typeorm pg *ระบุ database ที่ใช้* 
//npm i --save @nestjs/typeorm typeorm
//yarn add @nestjs/typeorm
//npm i typeorm-snake-naming-strategy
//yarn add typeorm-snake-naming-strategy

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from "path";
import { SnakeNamingStrategy } from 'typeorm-snake-naming-strategy';

//config database
export default () => 
({
    type: process.env.DB_CONNECTION ,//จากไฟล์ env
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        join(__dirname, '..', 'database', 'entities', '*.entity{.js,.ts}'), //หา path ที่เก็บไฟล์ entity ทั้งหมด
      ],
      synchronize: process.env.DB_SYNCHRONIZE.toLocaleLowerCase() === 'true',
      dropSchema: process.env.DB_DROP_SCHEMA.toLocaleLowerCase() === 'true',
      //migrationsRun: process.env.DB_MIGRATIONS_RUN.toLocaleLowerCase() === 'true', //ใช้งาน migration ด้วย
      //namingStrategy: new SnakeNamingStrategy(), //แปลงตัวแปรแบบ carmel เป็นแบบ snake
      logging: false,
    } as TypeOrmModuleOptions);
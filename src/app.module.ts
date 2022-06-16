import { ApiModule } from './api/api.module';
import { DatabaseModule } from './database/database.modules';
import { ConfigModule } from './config/config.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule,DatabaseModule,ApiModule],
  
})
export class AppModule {}

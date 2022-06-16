//ไว้เก็บโมดูลของแต่ละอัน จะได้ไม่ไปกองรวมที่ appmodule

import { Module } from "@nestjs/common";
import { UserModule } from './user/user.module';

@Module({
    imports: [
    UserModule]
})
export class ApiModule {}
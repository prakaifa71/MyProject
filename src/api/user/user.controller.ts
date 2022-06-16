import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/database/entities/user.entity';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const { fullname, username, password, dateOfBirth, gender } =
        createUserDto;
      const data = new UserEntity();
      data.fullname = fullname; //data,fullname คือที่มาจาก entity ตัว fullname ข้างหลังคือจาก Dto จะเอาที่ dto ไป saveใส่ตัว fullname นี้ใน entity นะ
      data.username = username;
      data.password = password;
      data.dateOfBirth = dateOfBirth;
      data.gender = gender;
      return this.userService.save(data);
    } catch (error) {
      console.log(error);
      
      throw error;
    }
  }

  @Get()
  findAll() {
    return this.userService.find();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  @Patch(':id')
  async update(@Param('id' , ParseIntPipe) id: number, @Body() body: UpdateUserDto) {
    try {
      const data = await this.userService.update({
        where: {
          id: id,
          isDelete: false,
        },
      },
      body,);
      return data;
    } catch (error) {
      throw error;
    }
  }

  // @Delete(':id')
  // remove(@Param('id' , ) id: string) {
  //   return this.userService.remove(+id);
  // }
}

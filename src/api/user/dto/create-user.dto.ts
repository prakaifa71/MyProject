import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example:'prakaifa'})
    fullname: string;

    @ApiProperty({example:'prakaifa71'})
    username: string;

    @ApiProperty({example:''})
    password: string;

    @ApiProperty({example:'1999-12-21'})
    dateOfBirth: string;

    @ApiProperty({example:'female'})
    gender: string;
}

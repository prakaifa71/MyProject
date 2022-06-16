import { UserGroups } from './../enum/user.enum';
import { TableName } from './../table-name.enum';
import { Column, Entity } from 'typeorm';
import { CommonEntity } from './../common-entity';
import { Exclude, Expose } from 'class-transformer';

@Entity(TableName.USER)
export class UserEntity extends CommonEntity {

    @Column()
    @Expose({
        groups:[UserGroups.USER_VIEW,]
    })
    fullname:string;

    @Column()
    @Expose({
        groups:[UserGroups.USER_VIEW,]
    })
    username:string;

    @Column()
    @Exclude()
    password: string;

    @Column()
    @Expose({
        groups:[UserGroups.USER_VIEW,]
    })
    dateOfBirth:string;

    @Column()
    @Expose({
        groups:[UserGroups.USER_VIEW,]
    })
    gender:string;
}

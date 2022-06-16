//npm i --save class-validator class-transformer
//yarn add class-validator class-transformer
import { Exclude, Expose, Transform } from 'class-transformer';
import {
  BaseEntity,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CommonGroups } from './enum/common-group.enum';


export class CommonEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int4' })
  @Expose({ groups: [CommonGroups.COMMON_VIEW] })
  id: number; //Expose ให้มองเห็น

  @CreateDateColumn({
    type: 'timestamptz',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  @Expose({ groups: [CommonGroups.COMMON_VIEW] })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  @Expose({ groups: [CommonGroups.COMMON_VIEW] })
  updatedAt: Date;

  @Column({ type: 'boolean', nullable: false, default: false })
  @Exclude() //ไม่ให้แสดง
  isDelete: boolean;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  @Exclude()
  deletedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}


//ทำ crud ไว้แล้ว และก็พวก error exeption ต่างๆ

import { BadRequestException, NotFoundException } from '@nestjs/common';
import { CommonEntity } from '../database/common-entity';
import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';

export class CrudService<T extends CommonEntity> {
  protected repository: Repository<T>;

  constructor(_repository: Repository<T>) {
    this.repository = _repository;
  }

  throwBadRequestException(msg?: any): BadRequestException {
    throw new BadRequestException(msg);
  }

  throwNotFoundException(name: string): NotFoundException {
    throw new NotFoundException(`${name} not found`);
  }

  async find(option?: FindManyOptions): Promise<T[]> {
    return await this.repository.find(option);
  }

  async findOne(options: FindOneOptions<T>): Promise<T> {
    return await this.repository.findOne(options);
  }

  async findAndCount(option?: FindManyOptions): Promise<[T[], number]> {
    return await this.repository.findAndCount(option);
  }

  async create(body: DeepPartial<T>): Promise<T> {
    const entity: T = this.repository.create(body);
    return await entity.save();
  }

  async update(findOneOptions: FindOneOptions, body: DeepPartial<T>) {
    const entity: T = await this.findOne(findOneOptions);
    if (!entity) {
      this.throwNotFoundException('id');
    }
    const merge = this.repository.merge(entity, body);
    return await merge.save();
  }

  async remove(findOneOptions?: FindOneOptions): Promise<void> {
    const entity: T = await this.findOne(findOneOptions);
    if (!entity) {
      this.throwNotFoundException('id');
    }
    await entity.softRemove();
  }

  merge(entity: T, body: DeepPartial<T>) {
    return this.repository.merge(entity, body);
  }

  async save(entity: DeepPartial<T>) {
    return this.repository.save(entity);
  }
}

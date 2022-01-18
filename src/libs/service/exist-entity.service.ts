import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { EntityExistException } from '../exception/entity-exist.exception';

@Injectable()
export class ExistEntityService {
  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {}

  async exists(entityClass: any, name: string): Promise<void> {
    const result = await this.entityManager.findOne(entityClass, { name });
    if (result) throw new EntityExistException(`${name} already exists`);
  }
}

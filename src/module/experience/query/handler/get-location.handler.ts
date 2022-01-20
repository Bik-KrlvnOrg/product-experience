import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { LocationRepository } from '../../domain/repository';
import { Logger } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { GetLocationQuery } from '../impl/get-location.query';

@QueryHandler(GetLocationQuery)
export class GetLocationHandler implements IQueryHandler<GetLocationQuery> {
  logger = new Logger(this.constructor.name);

  constructor(private readonly repository: LocationRepository) {}

  async execute(query: GetLocationQuery): Promise<any> {
    this.logger.log(instanceToPlain(query), 'GetLocationQuery');
    const { request } = query;
    return this.repository.findOne({ id: request });
  }
}

import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { LocationRepository } from '../../domain/repository';
import { Logger } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { GetLocationsQuery } from '../impl/get-locations.query';

@QueryHandler(GetLocationsQuery)
export class GetLocationsHandler implements IQueryHandler<GetLocationsQuery> {
  logger = new Logger(this.constructor.name);

  constructor(private readonly repository: LocationRepository) {}

  async execute(query: GetLocationsQuery): Promise<any> {
    this.logger.log(instanceToPlain(query), 'GetLocationsQuery');
    return this.repository.find({});
  }
}

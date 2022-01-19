import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetExperiencesWithLocationQuery } from '../impl/get-experiences-with-location.query';
import { LocationRepository } from '../../domain/repository';
import { Logger } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { GetLocationWithTimeslotsQuery } from '../impl/get-location-with-timeslots.query';

@QueryHandler(GetLocationWithTimeslotsQuery)
export class GetLocationWithTimeslotsHandler
  implements IQueryHandler<GetLocationWithTimeslotsQuery>
{
  logger = new Logger(this.constructor.name);

  constructor(private readonly repository: LocationRepository) {}

  async execute(query: GetLocationWithTimeslotsQuery): Promise<any> {
    this.logger.log(instanceToPlain(query), 'GetExperiencesWithLocationQuery');
    const { request } = query;
    return this.repository.findOne(
      { id: request },
      { relations: ['timeslots'] },
    );
  }
}

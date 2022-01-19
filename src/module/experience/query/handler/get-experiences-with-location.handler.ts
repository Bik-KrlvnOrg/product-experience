import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetExperiencesWithLocationQuery } from '../impl/get-experiences-with-location.query';
import { ExperienceRepository } from '../../domain/repository';
import { Logger } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';

@QueryHandler(GetExperiencesWithLocationQuery)
export class GetExperiencesWithLocationHandler
  implements IQueryHandler<GetExperiencesWithLocationQuery>
{
  logger = new Logger(this.constructor.name);
  constructor(private readonly repository: ExperienceRepository) {}
  async execute(query: GetExperiencesWithLocationQuery): Promise<any> {
    this.logger.log(instanceToPlain(query), 'GetExperiencesWithTimeslotsQuery');
    return this.repository.find({});
  }
}

import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { GetExperiencesQuery } from '../impl';
import { ExperienceRepository } from '../../domain/repository';

@QueryHandler(GetExperiencesQuery)
export class GetExperiencesHandler
  implements IQueryHandler<GetExperiencesQuery>
{
  constructor(private readonly repository: ExperienceRepository) {}

  logger = new Logger(this.constructor.name);

  async execute(query: GetExperiencesQuery): Promise<any> {
    this.logger.log('GetExperiencesQuery', query.request);
    return await this.repository.find({});
  }
}

import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { GetExperienceQuery } from '../impl';
import { ExperienceRepository } from '../../domain/repository';

@QueryHandler(GetExperienceQuery)
export class GetExperienceHandler implements IQueryHandler<GetExperienceQuery> {
  constructor(private readonly repository: ExperienceRepository) {}

  logger = new Logger(this.constructor.name);

  async execute(query: GetExperienceQuery): Promise<any> {
    this.logger.log(query.request, 'GetExperienceQuery');
    const { request } = query;
    return this.repository.findOne({ id: request });
  }
}

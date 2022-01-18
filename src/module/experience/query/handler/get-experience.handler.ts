import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { GetExperienceQuery } from '../impl';

@QueryHandler(GetExperienceQuery)
export class GetExperienceHandler implements IQueryHandler<GetExperienceQuery> {
  logger = new Logger(this.constructor.name);
  async execute(query: GetExperienceQuery): Promise<any> {
    this.logger.log('GetExperienceQuery', query.request);
    return Promise.resolve(undefined);
  }
}

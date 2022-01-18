import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { GetExperiencesQuery } from '../impl';

@QueryHandler(GetExperiencesQuery)
export class GetExperiencesHandler
  implements IQueryHandler<GetExperiencesQuery>
{
  logger = new Logger(this.constructor.name);

  async execute(query: GetExperiencesQuery): Promise<any> {
    this.logger.log('GetExperiencesQuery', query.request);
    return Promise.resolve(undefined);
  }
}

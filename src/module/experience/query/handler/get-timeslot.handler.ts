import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { GetTimeslotQuery } from '../impl/get-timeslot.query';
import { TimeslotRepository } from '../../domain/repository/timeslot.repository';

@QueryHandler(GetTimeslotQuery)
export class GetTimeslotHandler implements IQueryHandler<GetTimeslotQuery> {
  logger = new Logger(this.constructor.name);

  constructor(private readonly repository: TimeslotRepository) {}

  async execute(query: GetTimeslotQuery): Promise<any> {
    this.logger.log(instanceToPlain(query), 'GetTimeslotQuery');
    const { request } = query;
    return this.repository.findOne({ id: request });
  }
}

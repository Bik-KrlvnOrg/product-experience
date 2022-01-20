import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetTimeslotQuery } from '../query/impl/get-timeslot.query';

@Injectable()
export class TimeslotService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async findTimeslot(input) {
    return await this.queryBus.execute(new GetTimeslotQuery(input));
  }
}

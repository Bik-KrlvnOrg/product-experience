import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetLocationQuery } from '../query/impl/get-location.query';

@Injectable()
export class LocationService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async findLocation(input) {
    return await this.queryBus.execute(new GetLocationQuery(input));
  }
}

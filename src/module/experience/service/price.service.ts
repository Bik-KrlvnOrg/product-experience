import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AssignPriceToTimeslotCommand } from '../command/impl';
import { AssignPriceToTimeslotDto } from '../dto';

@Injectable()
export class PriceService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async assignPriceToTimeslot(input: AssignPriceToTimeslotDto) {
    return await this.commandBus.execute(
      new AssignPriceToTimeslotCommand(input),
    );
  }
}

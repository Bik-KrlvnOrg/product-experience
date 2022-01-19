import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateBookingCommand } from '../command/impl';

@Injectable()
export class BookingService {
  constructor(private readonly commandBu$: CommandBus) {}

  async reSchedule(input) {
    return await this.commandBu$.execute(new CreateBookingCommand(input));
  }
}

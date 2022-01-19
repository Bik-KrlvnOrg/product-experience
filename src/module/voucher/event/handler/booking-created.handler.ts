import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { BookingCreatedEvent } from '../impl/booking-created.event';

@EventsHandler(BookingCreatedEvent)
export class BookingCreatedHandler
  implements IEventHandler<BookingCreatedEvent>
{
  logger = new Logger(this.constructor.name);

  async handle(event: BookingCreatedEvent): Promise<any> {
    this.logger.log(instanceToPlain(event), 'BookingCreatedEvent');
  }
}

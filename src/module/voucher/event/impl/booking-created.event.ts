import { IEvent } from '@nestjs/cqrs';

export class BookingCreatedEvent implements IEvent {
  constructor(public readonly input) {}
}

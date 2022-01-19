import { AggregateRoot } from '@nestjs/cqrs';
import { BookingCreatedEvent } from '../event/impl/booking-created.event';

export class Booking extends AggregateRoot {
  data: any;
  constructor(public readonly id?: string) {
    super();
  }
  setData(input) {
    this.data = input;
  }
  bookAppointment() {
    this.apply(new BookingCreatedEvent(this.data));
  }
}

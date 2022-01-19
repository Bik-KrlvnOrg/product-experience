import { Injectable } from '@nestjs/common';
import { Booking } from '../domain/Booking';
import { AppointmentRepository } from '../domain/repository';

@Injectable()
export class BookingProjection {
  constructor(private readonly repository: AppointmentRepository) {}

  async bookAppointment(input) {
    const entity = this.repository.create(input);
    const save = await this.repository.save(entity);
    const booking = new Booking();
    booking.setData(save);
    booking.bookAppointment();
    return booking;
  }
}

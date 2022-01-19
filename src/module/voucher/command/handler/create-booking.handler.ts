import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateBookingCommand } from '../impl';
import { Logger } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { Booking } from '../../domain/Booking';
import { BookingProjection } from '../../projection/booking.projection';

@CommandHandler(CreateBookingCommand)
export class CreateBookingHandler
  implements ICommandHandler<CreateBookingCommand>
{
  constructor(
    private readonly projection: BookingProjection,
    private readonly eventPublisher: EventPublisher,
  ) {}
  logger = new Logger(this.constructor.name);
  async execute(command: CreateBookingCommand): Promise<any> {
    this.logger.log(instanceToPlain(command), 'CreateBookingCommand');
    const { input } = command;
    const appointment = await this.projection.bookAppointment(input);
    const context = await this.eventPublisher.mergeObjectContext(appointment);
    context.commit();
    return Promise.resolve();
  }
}

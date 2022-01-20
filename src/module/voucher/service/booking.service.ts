import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateBookingCommand } from '../command/impl';
import { DomainNotFoundException } from '../../../libs/exception';
import { LocationService } from '../../experience/service/location.service';
import { TimeslotService } from '../../experience/service/timeslot.service';

@Injectable()
export class BookingService {
  constructor(
    private readonly locationService: LocationService,
    private readonly timeslotService: TimeslotService,
    private readonly commandBu$: CommandBus,
  ) {}

  async reSchedule(input) {
    return await this.commandBu$.execute(new CreateBookingCommand(input));
  }

  async checkAvailability(input: {
    locationId: string;
    timeslotId: string;
  }): Promise<boolean> {
    const location = await this.locationService.findLocation(input.locationId);
    if (!input.locationId && !input.timeslotId) return false;
    if (!location)
      throw new DomainNotFoundException(`Location with ID: ${input} not found`);
    const limit = location.limit;

    const timeslot = await this.timeslotService.findTimeslot(input.timeslotId);
    if (!timeslot)
      throw new DomainNotFoundException(
        `Timeslot with ID: ${input.timeslotId} not found`,
      );
    return timeslot.isSlotAvailable(limit);
  }
}

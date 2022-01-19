import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateBookingCommand } from '../command/impl';
import { ExperienceService } from '../../experience/service/experience.service';
import { DomainNotFoundException } from '../../../libs/exception';

@Injectable()
export class BookingService {
  constructor(
    private readonly experienceService: ExperienceService,
    private readonly commandBu$: CommandBus,
  ) {}

  async reSchedule(input) {
    return await this.commandBu$.execute(new CreateBookingCommand(input));
  }

  async checkAvailability(input): Promise<boolean> {
    const locationWithTimeslots =
      await this.experienceService.findLocationWithTimeslots(input);
    if (!locationWithTimeslots)
      throw new DomainNotFoundException(`Location with ID: ${input} not found`);
    return locationWithTimeslots.isSlotAvailable();
  }
}

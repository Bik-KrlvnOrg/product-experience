import { Injectable } from '@nestjs/common';
import { CreateVoucherDto } from '../dto/create-voucher.dto';
import { UpdateVoucherDto } from '../dto/update-voucher.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateVoucherCommand } from '../command/impl';
import { BookingService } from './booking.service';
import { TimeslotLimitException } from '../../../libs/exception';

@Injectable()
export class VoucherService {
  constructor(
    private readonly bookingService: BookingService,
    private readonly commandBu$: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}
  async create(input: CreateVoucherDto) {
    const { appointment } = input;
    if (appointment && appointment.locationID) {
      const availability = await this.bookingService.checkAvailability(
        appointment.locationID,
      );
      if (!availability)
        throw new TimeslotLimitException('sorry timeslot unavailable');
    }
    return await this.commandBu$.execute(new CreateVoucherCommand(input));
  }

  findAll() {
    return `This action returns all voucher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voucher`;
  }

  update(id: number, updateVoucherDto: UpdateVoucherDto) {
    return `This action updates a #${id} voucher`;
  }

  remove(id: number) {
    return `This action removes a #${id} voucher`;
  }
}

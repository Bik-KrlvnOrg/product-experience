import { Injectable } from '@nestjs/common';
import { CreateVoucherDto } from '../dto/create-voucher.dto';
import { UpdateVoucherDto } from '../dto/update-voucher.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateVoucherCommand } from '../command/impl';

@Injectable()
export class VoucherService {
  constructor(
    private readonly commandBu$: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}
  async create(input: CreateVoucherDto) {
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

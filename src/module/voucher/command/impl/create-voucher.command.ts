import { ICommand } from '@nestjs/cqrs';
import { CreateVoucherDto } from '../../dto/create-voucher.dto';

export class CreateVoucherCommand implements ICommand {
  constructor(public readonly input: CreateVoucherDto) {}
}

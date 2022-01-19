import { ICommand } from '@nestjs/cqrs';
import { AssignPriceToTimeslotDto } from '../../dto';

export class AssignPriceToTimeslotCommand implements ICommand {
  constructor(public readonly priceToTimeslotDto: AssignPriceToTimeslotDto) {}
}

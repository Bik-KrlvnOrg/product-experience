import { IEvent } from '@nestjs/cqrs';
import { PriceEntity } from '../../../../entities';

export class AssignPriceToTimeslotEvent implements IEvent {
  constructor(public readonly priceEntity: PriceEntity) {}
}

import { AggregateRoot } from '@nestjs/cqrs';
import { AssignPriceToTimeslotEvent } from '../../event/impl';

export class Price extends AggregateRoot {
  data: any;

  constructor(public readonly id?: string) {
    super();
  }

  setData(data) {
    this.data = data;
  }

  assignPrice() {
    this.apply(new AssignPriceToTimeslotEvent(this.data));
  }
}

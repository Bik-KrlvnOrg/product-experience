import { AggregateRoot } from '@nestjs/cqrs';
import { VoucherCreatedEvent } from '../event/impl';

export class Voucher extends AggregateRoot {
  data: any;
  constructor(public readonly id?: string) {
    super();
  }

  setData(data) {
    this.data = data;
  }

  createVoucher() {
    this.apply(new VoucherCreatedEvent(this.data));
  }
}

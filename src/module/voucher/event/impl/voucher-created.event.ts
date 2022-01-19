import { IEvent } from '@nestjs/cqrs';

export class VoucherCreatedEvent implements IEvent {
  constructor(public readonly input) {}
}

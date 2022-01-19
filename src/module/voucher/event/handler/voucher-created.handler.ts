import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { VoucherCreatedEvent } from '../impl/voucher-created.event';
import { Logger } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';

@EventsHandler(VoucherCreatedEvent)
export class VoucherCreatedHandler
  implements IEventHandler<VoucherCreatedEvent>
{
  logger = new Logger(this.constructor.name);

  handle(event: VoucherCreatedEvent): any {
    this.logger.log(instanceToPlain(event), 'VoucherCreatedEvent');
  }
}

import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { AssignPriceToTimeslotEvent } from '../impl';

@EventsHandler(AssignPriceToTimeslotEvent)
export class AssignPriceToTimeslotHandler
  implements IEventHandler<AssignPriceToTimeslotEvent>
{
  logger = new Logger(this.constructor.name);

  handle(event: AssignPriceToTimeslotEvent): any {
    this.logger.log(instanceToPlain(event), 'AssignPriceToTimeslotEvent');
  }
}

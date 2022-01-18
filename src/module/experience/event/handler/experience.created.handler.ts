import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { ExperienceCreatedEvent } from '../impl/experience.created.event';

@EventsHandler(ExperienceCreatedEvent)
export class ExperienceCreatedHandler
  implements IEventHandler<ExperienceCreatedEvent>
{
  logger = new Logger(this.constructor.name);

  handle(event: ExperienceCreatedEvent): any {
    this.logger.log(event, 'ExperienceCreatedEvent');
  }
}
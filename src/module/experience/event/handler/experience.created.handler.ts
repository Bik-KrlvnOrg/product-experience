import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { ExperienceCreatedEvent } from '../impl/experience.created.event';

@EventsHandler(ExperienceCreatedEvent)
export class ExperienceCreatedHandler
  implements IEventHandler<ExperienceCreatedEvent>
{
  handle(event: ExperienceCreatedEvent): any {
    Logger.log(event, 'ExperienceCreatedEvent');
  }
}

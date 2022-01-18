import { IEvent } from '@nestjs/cqrs';
import { ExperienceEntity } from '../../../../entities';

export class ExperienceCreatedEvent implements IEvent {
  constructor(public readonly experience: ExperienceEntity) {}
}

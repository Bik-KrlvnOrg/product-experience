import { IEvent } from '@nestjs/cqrs';

export class ExperienceCreatedEvent implements IEvent {
  constructor(public readonly experience: any) {}
}

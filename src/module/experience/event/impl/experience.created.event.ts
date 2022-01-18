import { IEvent } from '@nestjs/cqrs';
import { CreateExperienceDto } from '../../dto';

export class ExperienceCreatedEvent implements IEvent {
  constructor(public readonly experienceDto: CreateExperienceDto) {}
}

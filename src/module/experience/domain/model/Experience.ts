import { AggregateRoot } from '@nestjs/cqrs';
import { ExperienceCreatedEvent } from '../../event/impl/experience.created.event';

export class Experience extends AggregateRoot {
  [id: string]: any;
  data: any;

  constructor(private readonly id?: string) {
    super();
  }

  setData(data) {
    this.data = data;
  }

  createExperience() {
    this.apply(new ExperienceCreatedEvent(this.data));
  }
}

import { IQuery } from '@nestjs/cqrs';

export class GetExperienceQuery implements IQuery {
  constructor(public readonly request: string) {}
}

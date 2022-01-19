import { IQuery } from '@nestjs/cqrs';

export class GetExperiencesWithLocationQuery implements IQuery {
  constructor(public readonly request?: any) {}
}

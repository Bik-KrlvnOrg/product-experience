import { IQuery } from '@nestjs/cqrs';

export class GetExperiencesQuery implements IQuery {
  constructor(public readonly request?: any) {}
}

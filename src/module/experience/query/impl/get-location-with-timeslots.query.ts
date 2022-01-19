import { IQuery } from '@nestjs/cqrs';

export class GetLocationWithTimeslotsQuery implements IQuery {
  constructor(public readonly request?: any) {}
}

import { IQuery } from '@nestjs/cqrs';

export class GetLocationsQuery implements IQuery {
  constructor(public readonly request?: any) {}
}

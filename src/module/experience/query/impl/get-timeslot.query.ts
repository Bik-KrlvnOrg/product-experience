import { IQuery } from '@nestjs/cqrs';

export class GetTimeslotQuery implements IQuery {
  constructor(public readonly request?: any) {}
}

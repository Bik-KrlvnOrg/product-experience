import { ICommand } from '@nestjs/cqrs';

export class CreateBookingCommand implements ICommand {
  constructor(public readonly input: any) {}
}

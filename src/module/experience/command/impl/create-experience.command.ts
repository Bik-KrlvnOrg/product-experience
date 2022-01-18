import { ICommand } from '@nestjs/cqrs';
import { CreateExperienceDto } from '../../dto';

export class CreateExperienceCommand implements ICommand {
  constructor(public readonly experienceDto: CreateExperienceDto) {}
}

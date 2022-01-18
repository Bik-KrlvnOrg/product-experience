import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateExperienceCommand } from '../impl/create-experience.command';
import { Logger } from '@nestjs/common';

@CommandHandler(CreateExperienceCommand)
export class CreateExperienceHandler
  implements ICommandHandler<CreateExperienceCommand>
{
  async execute(command: CreateExperienceCommand): Promise<any> {
    Logger.log('CreateExperienceHandler', 'CreateExperienceCommand');
    return Promise.resolve(undefined);
  }
}

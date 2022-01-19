import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateExperienceCommand } from '../impl';
import { Logger } from '@nestjs/common';
import { ExperienceProjection } from '../../projection/experience.projection';
import { instanceToPlain } from 'class-transformer';

@CommandHandler(CreateExperienceCommand)
export class CreateExperienceHandler
  implements ICommandHandler<CreateExperienceCommand>
{
  constructor(
    private readonly projection: ExperienceProjection,
    private readonly publisher: EventPublisher,
  ) {}

  logger = new Logger(this.constructor.name);

  async execute(command: CreateExperienceCommand): Promise<any> {
    this.logger.log(instanceToPlain(command), 'CreateExperienceCommand');
    const { experienceDto } = command;
    const projection = await this.projection.onCreate(experienceDto);
    const context = this.publisher.mergeObjectContext(projection);
    context.commit();
    return Promise.resolve();
  }
}

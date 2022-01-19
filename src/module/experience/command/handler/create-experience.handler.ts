import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateExperienceCommand } from '../impl';
import { Logger } from '@nestjs/common';
import { ExperienceProjection } from '../../projection/experience.projection';

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
    const { experienceDto } = command;
    this.logger.log(experienceDto, 'CreateExperienceCommand');
    const projection = await this.projection.onCreate(experienceDto);
    const context = this.publisher.mergeObjectContext(projection);
    context.commit();
    return Promise.resolve();
  }
}

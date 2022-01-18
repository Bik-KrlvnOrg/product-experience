import {
  CommandHandler,
  EventBus,
  EventPublisher,
  ICommandHandler,
} from '@nestjs/cqrs';
import { CreateExperienceCommand } from '../impl';
import { Logger } from '@nestjs/common';
import { ExistEntityService } from '../../../../libs/service';
import { ExperienceEntity } from '../../../../entities';
import { ExperienceProjection } from '../../projection/experience.projection';

@CommandHandler(CreateExperienceCommand)
export class CreateExperienceHandler
  implements ICommandHandler<CreateExperienceCommand>
{
  constructor(
    private readonly projection: ExperienceProjection,
    private readonly existEntityService: ExistEntityService,
    private readonly eventEventBus: EventBus,
    private readonly publisher: EventPublisher,
  ) {}

  logger = new Logger(this.constructor.name);

  async execute(command: CreateExperienceCommand): Promise<any> {
    this.logger.log(command.experienceDto, 'CreateExperienceCommand');
    const { experienceDto } = command;
    await this.existEntityService.exists(ExperienceEntity, experienceDto.name);
    const projection = await this.projection.onCreate(experienceDto);
    const context = this.publisher.mergeObjectContext(projection);
    context.commit();
    return Promise.resolve();
  }
}

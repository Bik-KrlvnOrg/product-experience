import {
  CommandHandler,
  EventBus,
  EventPublisher,
  ICommandHandler,
} from '@nestjs/cqrs';
import { CreateExperienceCommand } from '../impl';
import { Logger } from '@nestjs/common';
import { ExperienceRepository } from '../../domain/repository';
import { ExistEntityService } from '../../../../libs/service';
import { ExperienceEntity } from '../../../../entities';
import { Experience } from '../../domain/model';

@CommandHandler(CreateExperienceCommand)
export class CreateExperienceHandler
  implements ICommandHandler<CreateExperienceCommand>
{
  constructor(
    private readonly experienceRepository: ExperienceRepository,
    private readonly existEntityService: ExistEntityService,
    private readonly eventEventBus: EventBus,
    private readonly publisher: EventPublisher,
  ) {}

  logger = new Logger(this.constructor.name);

  async execute(command: CreateExperienceCommand): Promise<any> {
    this.logger.log(command.experienceDto, 'CreateExperienceCommand');
    const { experienceDto } = command;
    await this.existEntityService.exists(ExperienceEntity, experienceDto.name);
    const experienceEntity = this.experienceRepository.create(experienceDto);
    const result = await this.experienceRepository.save(experienceEntity);
    const experience = new Experience();
    experience.setData(result);
    experience.createExperience();
    const context = this.publisher.mergeObjectContext(experience);
    context.commit();
    return Promise.resolve(result);
  }
}

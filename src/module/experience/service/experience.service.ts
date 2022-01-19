import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetExperienceQuery, GetExperiencesQuery } from '../query/impl';
import { CreateExperienceDto, UpdateExperienceDto } from '../dto';
import { CreateExperienceCommand } from '../command/impl';
import { ExistEntityService } from '../../../libs/service';
import { ExperienceEntity } from '../../../entities';

@Injectable()
export class ExperienceService {
  constructor(
    private readonly existEntityService: ExistEntityService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}
  async create(createExperienceDto: CreateExperienceDto) {
    await this.existEntityService.exists(
      ExperienceEntity,
      createExperienceDto.name,
    );
    return await this.commandBus.execute(
      new CreateExperienceCommand(createExperienceDto),
    );
  }

  async findAll(data?: any) {
    return await this.queryBus.execute(new GetExperiencesQuery(data));
  }

  async findOne(id: string) {
    return await this.queryBus.execute(new GetExperienceQuery(id));
  }

  update(id: string, updateExperienceDto: UpdateExperienceDto) {
    return `This action updates a #${id} experience`;
  }

  remove(id: string) {
    return `This action removes a #${id} experience`;
  }
}

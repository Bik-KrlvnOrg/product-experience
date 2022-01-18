import { Injectable } from '@nestjs/common';
import { CreateExperienceDto } from '../dto/create-experience.dto';
import { UpdateExperienceDto } from '../dto/update-experience.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateExperienceCommand } from '../command/impl/create-experience.command';

@Injectable()
export class ExperienceService {
  constructor(private readonly commandBus: CommandBus) {}
  async create(createExperienceDto: CreateExperienceDto) {
    return await this.commandBus.execute(
      new CreateExperienceCommand(createExperienceDto),
    );
  }

  findAll() {
    return `This action returns all experience`;
  }

  findOne(id: number) {
    return `This action returns a #${id} experience`;
  }

  update(id: number, updateExperienceDto: UpdateExperienceDto) {
    return `This action updates a #${id} experience`;
  }

  remove(id: number) {
    return `This action removes a #${id} experience`;
  }
}

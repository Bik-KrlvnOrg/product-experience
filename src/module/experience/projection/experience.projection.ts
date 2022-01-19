import { Injectable } from '@nestjs/common';
import { Experience } from '../domain/model';
import { CreateExperienceDto } from '../dto';
import { ExperienceRepository } from '../domain/repository';
import { Transactional } from 'typeorm-transactional-cls-hooked';

@Injectable()
export class ExperienceProjection {
  constructor(private readonly repository: ExperienceRepository) {}
  @Transactional()
  async onCreate(dto: CreateExperienceDto) {
    const entity = this.repository.create(dto);
    const save = await this.repository.save(entity);
    const experience = new Experience();
    experience.setData(save);
    experience.createExperience();
    return experience;
  }
}

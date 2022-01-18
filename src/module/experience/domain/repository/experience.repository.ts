import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { ExperienceEntity } from '../../../../entities';
import { EntityRepository } from 'typeorm';

@EntityRepository(ExperienceEntity)
export class ExperienceRepository extends BaseRepository<ExperienceEntity> {}

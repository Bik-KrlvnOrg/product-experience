import { EntityRepository } from 'typeorm';
import { TimeslotEntity } from '../../../../entities';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

@EntityRepository(TimeslotEntity)
export class TimeslotRepository extends BaseRepository<TimeslotEntity> {}

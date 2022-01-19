import { EntityRepository } from 'typeorm';
import { LocationEntity } from '../../../../entities';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

@EntityRepository(LocationEntity)
export class LocationRepository extends BaseRepository<LocationEntity> {}

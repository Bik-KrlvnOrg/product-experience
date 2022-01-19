import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { PriceEntity } from '../../../../entities';
import { EntityRepository } from 'typeorm';

@EntityRepository(PriceEntity)
export class PriceRepository extends BaseRepository<PriceEntity> {}

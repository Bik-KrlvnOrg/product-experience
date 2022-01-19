import { EntityRepository } from 'typeorm';
import { VoucherEntity } from '../../../../entities';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

@EntityRepository(VoucherEntity)
export class VoucherRepository extends BaseRepository<VoucherEntity> {}

import { EntityRepository } from 'typeorm';
import { AppointmentEntity } from '../../../../entities';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

@EntityRepository(AppointmentEntity)
export class AppointmentRepository extends BaseRepository<AppointmentEntity> {}

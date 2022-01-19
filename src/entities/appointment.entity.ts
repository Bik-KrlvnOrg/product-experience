import { AbstractEntity } from './abstract-entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { VoucherEntity } from './voucher.entity';

@Entity({ name: 'appointment' })
export class AppointmentEntity extends AbstractEntity {
  @Column('uuid')
  experienceID: string;
  @Column('uuid')
  locationID: string;
  @Column('uuid')
  timeslotID: string;
  @OneToOne(() => VoucherEntity, (voucher) => voucher.appointment, {
    cascade: true,
  })
  voucher: VoucherEntity;
}

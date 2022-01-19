import { AbstractEntity } from './abstract-entity';
import { Column, Entity, OneToOne } from 'typeorm';
import { VoucherEntity } from './voucher.entity';
import { TimeslotEntity } from './timeslot.entity';

@Entity({ name: 'appointment' })
export class AppointmentEntity extends AbstractEntity {
  @Column('uuid')
  experienceID: string;
  @Column('uuid')
  locationID: string;
  @OneToOne(() => VoucherEntity, (voucher) => voucher.appointment, {
    cascade: true,
  })
  voucher: VoucherEntity;
  @OneToOne(() => TimeslotEntity, (timeslot) => timeslot.appointment, {
    cascade: true,
  })
  timeslot: TimeslotEntity;
}

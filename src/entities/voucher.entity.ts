import { AbstractEntity } from './abstract-entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { AppointmentEntity } from './appointment.entity';

enum Status {
  ACTIVE = 'ACTIVE',
  IN_ACTIVE = 'IN_ACTIVE',
}
@Entity({ name: 'voucher' })
export class VoucherEntity extends AbstractEntity {
  @Column()
  totalAmount: number;
  @Column({ default: Status.ACTIVE })
  status: Status;
  @OneToOne(() => CustomerEntity, (customer) => customer.id, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @OneToOne(() => AppointmentEntity, (appointment) => appointment.id, {
    eager: true,
  })
  @JoinColumn({ name: 'appointment_id' })
  appointment: AppointmentEntity;
}

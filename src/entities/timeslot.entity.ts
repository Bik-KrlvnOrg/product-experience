import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { AbstractEntity } from './abstract-entity';
import { LocationEntity } from './location.entity';
import { PriceEntity } from './price.entity';
import { AppointmentEntity } from './appointment.entity';

@Entity({ name: 'timeslot' })
export class TimeslotEntity extends AbstractEntity {
  @Column()
  name: string;
  @OneToOne(() => PriceEntity, (price) => price.id, {
    eager: true,
  })
  @JoinColumn({ name: 'price_id' })
  price: PriceEntity;

  @ManyToOne(() => LocationEntity, (location) => location.timeslots)
  @JoinColumn({ name: 'location_id' })
  location: LocationEntity;

  @OneToOne(() => AppointmentEntity, (appointment) => appointment.id, {
    eager: true,
  })
  @JoinColumn({ name: 'appointment_id' })
  appointment: AppointmentEntity;
}

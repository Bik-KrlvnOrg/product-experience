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

  @OneToMany(() => AppointmentEntity, (appointment) => appointment.timeslot, {
    eager: true,
  })
  appointments: AppointmentEntity[];

  isSlotAvailable(limit: number): boolean {
    return this.appointments.length < limit;
  }
}

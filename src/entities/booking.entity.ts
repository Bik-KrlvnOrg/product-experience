import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { AbstractEntity } from './abstract-entity';
import { CustomerEntity } from './customer.entity';

@Entity({ name: 'booking' })
export class BookingEntity extends AbstractEntity {
  @Column('uuid')
  experienceID: string;
  @Column('uuid')
  locationID: string;
  @Column()
  fromDate: Date;
  @Column()
  toDate: Date;
}

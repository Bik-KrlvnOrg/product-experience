import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { AbstractEntity } from './abstract-entity';
import { LocationEntity } from './location.entity';
import { PriceEntity } from './price.entity';

@Entity({ name: 'timeslot' })
export class TimeslotEntity extends AbstractEntity {
  @Column()
  name: string;
  @OneToOne(() => PriceEntity, (price) => price.id, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'price_id' })
  price: PriceEntity;

  @ManyToOne(() => LocationEntity, (location) => location.timeslots)
  @JoinColumn({ name: 'location_id' })
  location: LocationEntity;
}

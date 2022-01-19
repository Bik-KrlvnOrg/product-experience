import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract-entity';
import { LocationEntity } from './location.entity';

@Entity({ name: 'timeslot' })
export class TimeslotEntity extends AbstractEntity {
  @Column()
  name: string;
  @ManyToOne(() => LocationEntity, (location) => location.id, { cascade: true })
  @JoinColumn({ name: 'location_id' })
  location: LocationEntity;
}

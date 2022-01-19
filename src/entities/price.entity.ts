import { AbstractEntity } from './abstract-entity';
import { Column, Entity, OneToOne } from 'typeorm';
import { TimeslotEntity } from './timeslot.entity';

@Entity({ name: 'price' })
export class PriceEntity extends AbstractEntity {
  @Column()
  name: string;
  @Column()
  rate: number;
  @OneToOne(() => TimeslotEntity, (timeslot) => timeslot.price, {
    cascade: true,
  })
  timeslot: TimeslotEntity;
}

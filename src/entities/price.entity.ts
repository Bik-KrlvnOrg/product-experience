import { AbstractEntity } from './abstract-entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'price' })
export class PriceEntity extends AbstractEntity {
  @Column()
  name: string;
  @Column()
  rate: number;
}

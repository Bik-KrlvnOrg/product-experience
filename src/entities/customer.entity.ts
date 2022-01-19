import { AbstractEntity } from './abstract-entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'customer' })
export class CustomerEntity extends AbstractEntity {
  @Column()
  name: string;
  @Column({ nullable: true })
  address: string;
}

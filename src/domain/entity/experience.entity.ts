import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract-entity';

@Entity({ name: 'experience' })
export class ExperienceEntity extends AbstractEntity {
  @Column()
  name: string;
}

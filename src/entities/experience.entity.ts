import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract-entity';
import { LocationEntity } from './location.entity';

@Entity({ name: 'experience' })
export class ExperienceEntity extends AbstractEntity {
  @Column()
  name: string;
  @Column()
  duration: number;
  @Column('text', { nullable: true })
  description: string;
  @OneToMany(() => LocationEntity, (location) => location.experience, {
    cascade: true,
  })
  locations: LocationEntity[];
}

import { AbstractEntity } from './abstract-entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { ExperienceEntity } from './experience.entity';
import { TimeslotEntity } from './timeslot.entity';

@Entity({ name: 'location' })
export class LocationEntity extends AbstractEntity {
  @Column()
  name: string;
  @ManyToOne(() => ExperienceEntity, (experience) => experience.locations)
  @JoinColumn({ name: 'experience_id' })
  experience: ExperienceEntity;

  @OneToMany(() => TimeslotEntity, (timeslots) => timeslots)
  timeslots: TimeslotEntity[];
}

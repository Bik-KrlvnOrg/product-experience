import { AbstractEntity } from './abstract-entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { ExperienceEntity } from './experience.entity';
import { TimeslotEntity } from './timeslot.entity';

@Entity({ name: 'location' })
export class LocationEntity extends AbstractEntity {
  @Column()
  name: string;
  @Column()
  limit: number;
  @ManyToOne(() => ExperienceEntity, (experience) => experience.locations)
  @JoinColumn({ name: 'experience_id' })
  experience: ExperienceEntity;

  @OneToMany(() => TimeslotEntity, (timeslot) => timeslot.location, {
    cascade: true,
  })
  timeslots: TimeslotEntity[];
}

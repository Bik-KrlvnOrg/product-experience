import { Entity } from 'typeorm';
import { AbstractEntity } from './abstract-entity';

@Entity({ name: 'timeslot' })
export class TimeslotEntity extends AbstractEntity {}

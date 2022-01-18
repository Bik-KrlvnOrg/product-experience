import { AbstractEntity } from './abstract-entity';
import { Entity } from 'typeorm';

@Entity({ name: 'appointment' })
export class AppointmentEntity extends AbstractEntity {}

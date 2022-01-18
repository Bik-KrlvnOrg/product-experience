import { AbstractEntity } from './abstract-entity';
import { Entity } from 'typeorm';

@Entity({ name: 'location' })
export class LocationEntity extends AbstractEntity {}

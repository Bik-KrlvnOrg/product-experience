import { AbstractEntity } from './abstract-entity';
import { Entity } from 'typeorm';

@Entity({ name: 'voucher' })
export class VoucherEntity extends AbstractEntity {}

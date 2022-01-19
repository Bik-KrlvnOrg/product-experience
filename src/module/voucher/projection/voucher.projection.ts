import { Injectable } from '@nestjs/common';
import { VoucherRepository } from '../domain/voucher.repository';
import { CreateVoucherDto } from '../dto/create-voucher.dto';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { Voucher } from '../domain/Voucher';

@Injectable()
export class VoucherProjection {
  constructor(private readonly repository: VoucherRepository) {}

  @Transactional()
  async onCreate(input: CreateVoucherDto) {
    const entity = this.repository.create(input);
    const save = await this.repository.save(entity);
    const voucher = new Voucher();
    voucher.setData({ voucher: save, input });
    voucher.createVoucher();
    return voucher;
  }
}

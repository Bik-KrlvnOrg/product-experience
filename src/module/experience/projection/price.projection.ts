import { Injectable } from '@nestjs/common';
import { AssignPriceToTimeslotDto } from '../dto';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { PriceRepository } from '../domain/repository/price.repository';
import { Price } from '../domain/model/Price';

@Injectable()
export class PriceProjection {
  constructor(private readonly repository: PriceRepository) {}
  @Transactional()
  async onCreate(dto: AssignPriceToTimeslotDto) {
    const entity = this.repository.create(dto);
    const save = await this.repository.save(entity);
    const price = new Price();
    price.setData(save);
    price.assignPrice();
    return price;
  }
}

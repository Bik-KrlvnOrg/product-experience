import { Controller, Get, Param } from '@nestjs/common';
import { VoucherService } from '../service/voucher.service';

@Controller('vouchers')
export class VoucherQueryController {
  constructor(private readonly voucherService: VoucherService) {}
  @Get()
  findAll() {
    return this.voucherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voucherService.findOne(+id);
  }
}

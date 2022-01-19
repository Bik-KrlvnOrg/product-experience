import { Test, TestingModule } from '@nestjs/testing';
import { VoucherCommandController } from './voucher.controller';
import { VoucherService } from '../service/voucher.service';

describe('VoucherController', () => {
  let controller: VoucherCommandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoucherCommandController],
      providers: [VoucherService],
    }).compile();

    controller = module.get<VoucherCommandController>(VoucherCommandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

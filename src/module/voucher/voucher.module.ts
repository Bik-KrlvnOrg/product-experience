import { Module, OnModuleInit } from '@nestjs/common';
import { VoucherService } from './service/voucher.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoucherRepository } from './domain/voucher.repository';
import { CommandHandlers } from './command/handler';
import { CommandBus, CqrsModule, EventBus } from '@nestjs/cqrs';
import { VoucherCommandController, VoucherQueryController } from './controller';
import { VoucherProjection } from './projection';
import { EventHandlers } from './event/handler';
import { ModuleRef } from '@nestjs/core';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([VoucherRepository])],
  controllers: [VoucherCommandController, VoucherQueryController],
  providers: [
    VoucherService,
    VoucherProjection,
    ...CommandHandlers,
    ...EventHandlers,
  ],
})
export class VoucherModule implements OnModuleInit {
  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly command$: CommandBus,
    private readonly event$: EventBus,
  ) {}

  onModuleInit(): any {
    this.event$.register(EventHandlers);
    this.command$.register(CommandHandlers);
  }
}

import { Module, OnModuleInit } from '@nestjs/common';
import { VoucherService } from './service/voucher.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandHandlers } from './command/handler';
import { CommandBus, CqrsModule, EventBus } from '@nestjs/cqrs';
import { VoucherCommandController, VoucherQueryController } from './controller';
import { VoucherProjection } from './projection';
import { EventHandlers } from './event/handler';
import { ModuleRef } from '@nestjs/core';
import { BookingProjection } from './projection/booking.projection';
import { BookingService } from './service/booking.service';
import { AppointmentRepository, VoucherRepository } from './domain/repository';
import { BookingCommandController } from './controller/booking-command.controller';
import { VoucherSaga } from './saga/voucher.saga';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([VoucherRepository, AppointmentRepository]),
  ],
  controllers: [
    VoucherCommandController,
    BookingCommandController,
    VoucherQueryController,
  ],
  providers: [
    VoucherService,
    VoucherProjection,
    BookingProjection,
    BookingService,
    ...CommandHandlers,
    ...EventHandlers,
    VoucherSaga,
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
    this.event$.registerSagas([VoucherSaga]);
  }
}

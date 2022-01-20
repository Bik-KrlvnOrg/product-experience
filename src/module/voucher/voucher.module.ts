import { Module } from '@nestjs/common';
import { VoucherService } from './service/voucher.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandHandlers } from './command/handler';
import { CqrsModule } from '@nestjs/cqrs';
import { VoucherCommandController, VoucherQueryController } from './controller';
import { VoucherProjection } from './projection';
import { EventHandlers } from './event/handler';
import { BookingProjection } from './projection/booking.projection';
import { BookingService } from './service/booking.service';
import { AppointmentRepository, VoucherRepository } from './domain/repository';
import { BookingCommandController } from './controller/booking-command.controller';
import { VoucherSaga } from './saga/voucher.saga';
import { ExperienceModule } from '../experience/experience.module';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([VoucherRepository, AppointmentRepository]),
    ExperienceModule,
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
export class VoucherModule {}

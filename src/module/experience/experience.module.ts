import { Module } from '@nestjs/common';
import { ExperienceService } from './service/experience.service';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExperienceRepository, LocationRepository } from './domain/repository';
import { EventHandlers } from './event/handler';
import { CommandHandlers } from './command/handler';
import { QueryHandlers } from './query/handler';
import { ExistEntityService } from '../../libs/service';
import { ExperienceProjection } from './projection/experience.projection';
import {
  ExperienceCommandController,
  ExperienceQueryController,
} from './controller';
import { PriceRepository } from './domain/repository/price.repository';
import { PriceProjection } from './projection/price.projection';
import { PriceService } from './service/price.service';
import { PriceCommandController } from './controller/price-command.controller';
import { TimeslotService } from './service/timeslot.service';
import { LocationService } from './service/location.service';
import { TimeslotRepository } from './domain/repository/timeslot.repository';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([
      ExperienceRepository,
      LocationRepository,
      TimeslotRepository,
      PriceRepository,
    ]),
  ],
  controllers: [
    ExperienceCommandController,
    PriceCommandController,
    ExperienceQueryController,
  ],
  providers: [
    ExperienceService,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    ExistEntityService,
    PriceService,
    ExperienceProjection,
    PriceProjection,
    TimeslotService,
    LocationService,
  ],
  exports: [ExperienceService, TimeslotService, LocationService],
})
export class ExperienceModule {}

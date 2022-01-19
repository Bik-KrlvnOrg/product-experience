import { Module, OnModuleInit } from '@nestjs/common';
import { ExperienceService } from './service/experience.service';
import { CommandBus, CqrsModule, EventBus } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExperienceRepository, LocationRepository } from './domain/repository';
import { EventHandlers } from './event/handler';
import { CommandHandlers } from './command/handler';
import { QueryHandlers } from './query/handler';
import { ExistEntityService } from '../../libs/service';
import { ModuleRef } from '@nestjs/core';
import { ExperienceProjection } from './projection/experience.projection';
import { ExperienceCommandController } from './controller';
import { ExperienceQueryController } from './controller';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([ExperienceRepository, LocationRepository]),
  ],
  controllers: [ExperienceCommandController, ExperienceQueryController],
  providers: [
    ExperienceService,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    ExistEntityService,
    ExperienceProjection,
  ],
})
export class ExperienceModule implements OnModuleInit {
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

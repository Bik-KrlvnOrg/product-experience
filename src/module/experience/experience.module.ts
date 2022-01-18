import { Module } from '@nestjs/common';
import { ExperienceService } from './service/experience.service';
import { ExperienceController } from './controller/experience.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExperienceRepository } from './domain/repository';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([ExperienceRepository])],
  controllers: [ExperienceController],
  providers: [ExperienceService],
})
export class ExperienceModule {}

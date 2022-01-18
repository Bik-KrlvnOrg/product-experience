import { Module } from '@nestjs/common';
import { ExperienceService } from './service/experience.service';
import { ExperienceController } from './controller/experience.controller';

@Module({
  controllers: [ExperienceController],
  providers: [ExperienceService],
})
export class ExperienceModule {}

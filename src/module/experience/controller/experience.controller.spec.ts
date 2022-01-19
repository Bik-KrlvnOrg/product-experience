import { Test, TestingModule } from '@nestjs/testing';
import { ExperienceService } from '../service/experience.service';
import { ExperienceCommandController } from './experience-command.controller';

describe('ExperienceController', () => {
  let controller: ExperienceCommandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExperienceCommandController],
      providers: [ExperienceService],
    }).compile();

    controller = module.get<ExperienceCommandController>(
      ExperienceCommandController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

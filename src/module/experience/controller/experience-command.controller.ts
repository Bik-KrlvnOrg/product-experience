import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExperienceService } from '../service/experience.service';
import { CreateExperienceDto } from '../dto';
import { UpdateExperienceDto } from '../dto';

@Controller('experiences')
export class ExperienceCommandController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Post()
  create(@Body() createExperienceDto: CreateExperienceDto) {
    return this.experienceService.create(createExperienceDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExperienceDto: UpdateExperienceDto,
  ) {
    return this.experienceService.update(id, updateExperienceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experienceService.remove(id);
  }
}

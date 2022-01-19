import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ExperienceService } from '../service/experience.service';
import { CreateExperienceDto } from '../dto';
import { UpdateExperienceDto } from '../dto';

@Controller('experiences')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Post()
  create(@Body() createExperienceDto: CreateExperienceDto) {
    return this.experienceService.create(createExperienceDto);
  }

  @Get()
  findAll() {
    return this.experienceService.findAllWithLocation();
  }

  @Get('category')
  findAllExperienceWithLocation() {
    return this.experienceService.findAll();
  }

  @Get('location/:id')
  findLocationWithTimeslots(@Param('id') locationID: string) {
    return this.experienceService.findLocationWithTimeslots(locationID);
  }

  @Get('locations')
  findLocation() {
    return this.experienceService.findLocations();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experienceService.findOne(id);
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

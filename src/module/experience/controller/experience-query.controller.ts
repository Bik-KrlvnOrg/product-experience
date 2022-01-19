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
export class ExperienceQueryController {
  constructor(private readonly experienceService: ExperienceService) {}

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
  findLocations() {
    return this.experienceService.findLocations();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experienceService.findOne(id);
  }
}

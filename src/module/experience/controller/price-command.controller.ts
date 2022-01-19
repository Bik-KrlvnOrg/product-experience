import { Body, Controller, Post } from '@nestjs/common';
import { AssignPriceToTimeslotDto } from '../dto';
import { PriceService } from '../service/price.service';

@Controller('prices')
export class PriceCommandController {
  constructor(private readonly priceService: PriceService) {}

  @Post('assign-to-timeslot')
  async assignToTimeslot(@Body() priceToTimeslotDto: AssignPriceToTimeslotDto) {
    return this.priceService.assignPriceToTimeslot(priceToTimeslotDto);
  }
}

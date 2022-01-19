import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AssignPriceToTimeslotCommand } from '../impl';
import { Logger } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { PriceProjection } from '../../projection/price.projection';

@CommandHandler(AssignPriceToTimeslotCommand)
export class AssignPriceToTimeslotHandler
  implements ICommandHandler<AssignPriceToTimeslotCommand>
{
  constructor(
    private readonly projection: PriceProjection,
    private readonly publisher: EventPublisher,
  ) {}

  logger = new Logger(this.constructor.name);

  async execute(command: AssignPriceToTimeslotCommand): Promise<any> {
    this.logger.log(instanceToPlain(command), 'AssignPriceToTimeslotCommand');
    const { priceToTimeslotDto } = command;
    const projection = await this.projection.onCreate(priceToTimeslotDto);
    const context = this.publisher.mergeObjectContext(projection);
    context.commit();
    return Promise.resolve();
  }
}

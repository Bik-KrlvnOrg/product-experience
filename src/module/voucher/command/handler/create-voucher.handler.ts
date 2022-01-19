import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateVoucherCommand } from '../impl';
import { Logger } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { VoucherProjection } from '../../projection';

@CommandHandler(CreateVoucherCommand)
export class CreateVoucherHandler
  implements ICommandHandler<CreateVoucherCommand>
{
  constructor(
    private readonly projection: VoucherProjection,
    private readonly eventPublisher: EventPublisher,
  ) {}
  logger = new Logger(this.constructor.name);
  async execute(command: CreateVoucherCommand): Promise<any> {
    this.logger.log(instanceToPlain(command), 'CreateVoucherCommand');
    const { input } = command;
    const voucher = await this.projection.onCreate(input);
    const context = this.eventPublisher.mergeObjectContext(voucher);
    context.commit();
    return Promise.resolve({ success: true });
  }
}

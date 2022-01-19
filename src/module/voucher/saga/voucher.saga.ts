import { delay, map } from 'rxjs/operators';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { VoucherCreatedEvent } from '../event/impl';
import { Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateBookingCommand } from '../command/impl';

@Injectable()
export class VoucherSaga {
  logger = new Logger(this.constructor.name);

  @Saga()
  voucherCreated = (event$: Observable<any>): Observable<ICommand> => {
    return event$.pipe(
      ofType(VoucherCreatedEvent),
      delay(1000),
      map((event) => {
        this.logger.log(event, `Inside [VoucherSaga] Saga`);
        const { input } = event;
        const { id, appointment } = input;
        if (id && appointment) {
          const voucher = { id };
          appointment.voucher = voucher;
          return new CreateBookingCommand(appointment);
        }

        return null;
      }),
    );
  };
}

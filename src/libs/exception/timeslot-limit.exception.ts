import { HttpException, HttpStatus } from '@nestjs/common';

const TIMESLOT_LIMIT_ERR_CODE = 2333;
export class TimeslotLimitException extends HttpException {
  constructor(message?: string) {
    super({ message, code: TIMESLOT_LIMIT_ERR_CODE }, HttpStatus.BAD_REQUEST);
    this.name = this.constructor.name;
  }
}

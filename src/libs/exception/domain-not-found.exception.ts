import { HttpException, HttpStatus } from '@nestjs/common';

const DOMAIN_LIMIT_ERR_CODE = 4342;
export class DomainNotFoundException extends HttpException {
  constructor(message?: string) {
    super({ message, code: DOMAIN_LIMIT_ERR_CODE }, HttpStatus.BAD_REQUEST);
    this.name = this.constructor.name;
  }
}

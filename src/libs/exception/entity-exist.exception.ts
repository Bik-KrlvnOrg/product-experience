import { HttpException, HttpStatus } from '@nestjs/common';

const ENTITY_EXIST_ERR_CODE = 1222;
export class EntityExistException extends HttpException {
  constructor(message?: string) {
    super({ message, code: ENTITY_EXIST_ERR_CODE }, HttpStatus.BAD_REQUEST);
    this.name = this.constructor.name;
  }
}

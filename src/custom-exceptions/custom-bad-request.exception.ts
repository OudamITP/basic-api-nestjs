import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomBadRequestException extends HttpException {
  constructor() {
    super('Bad request', HttpStatus.BAD_REQUEST);
  }
}

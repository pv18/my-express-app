import { CustomError } from './custom-errors';

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(message: string) {
    super(message);
    this.message = message;

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeError() {
    return { message: this.message };
  }
}
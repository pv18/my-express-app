import { CustomError } from './custom-errors';

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor(message = 'Not found') {
    super(message);
    this.message = message;

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeError() {
    return { message: this.message };
  }
}

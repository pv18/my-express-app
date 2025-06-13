export abstract class CustomError extends Error {
  abstract statusCode: number; // abstract class это из typescript, говорит о том что этот класс будет наследоваться и не будет иметь детей

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeError(): { message: string };
}

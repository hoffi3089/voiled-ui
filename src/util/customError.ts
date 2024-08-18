class ValidateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

class SystemError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export { ValidateError, SystemError }
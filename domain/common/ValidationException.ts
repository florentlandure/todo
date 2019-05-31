import { ValidationError } from './ValidationError';

export class ValidationException extends Error {
  private _errors: ValidationError[];

  constructor(errors: ValidationError[]) {
    super('ValidationException');
    this._errors = errors;
  }

  get errors(): ValidationError[] {
    return this.errors;
  }
}

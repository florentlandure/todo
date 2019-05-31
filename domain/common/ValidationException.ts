import { ValidationError } from './ValidationError';

export class ValidationException extends Error {
  errors: ValidationError[];

  constructor(errors: ValidationError[]) {
    super('ValidationException');
    this.errors = errors;
  }
}

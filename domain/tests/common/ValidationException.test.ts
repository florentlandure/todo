import { ValidationException, ValidationError } from '../../common';

describe('ValidationException', () => {
  test('Get the errors list', () => {
    const errors: ValidationError[] = [
      { field: 'Field', message: 'Message' },
      { field: 'Field 2', message: 'Message 2' }
    ];
    const exception = new ValidationException(errors);
    expect(exception.message).toEqual('ValidationException');
    expect(exception.errors).toEqual(errors);
  });
});

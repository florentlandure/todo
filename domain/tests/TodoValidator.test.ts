import { TodoValidator } from '../TodoValidator';
import { AddTodoParams } from '../types';

describe('TodoValidator', () => {
  const validator = new TodoValidator();

  test('A todo without title in invalid', () => {
    const params: AddTodoParams = { title: '' };
    expect(validator.validate(params)).toEqual(false);
    expect(validator.errors).toEqual([
      {
        field: 'title',
        message: 'required'
      }
    ]);
  });

  test('A todo with a title under the character limit is valid', () => {
    const params: AddTodoParams = { title: 'Title' };
    expect(validator.validate(params)).toEqual(true);
    expect(validator.errors.length).toEqual(0);
  });

  test('A todo with a title above the character limit is invalid', () => {
    const params: AddTodoParams = {
      title:
        '01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'
    };
    expect(validator.validate(params)).toEqual(false);
    expect(validator.errors).toEqual([
      {
        field: 'title',
        message: 'over_character_limit'
      }
    ]);
  });

  test('A todo with a description above the character limit is invalid', () => {
    const params: AddTodoParams = {
      title: 'Title',
      description:
        '01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'
    };
    expect(validator.validate(params)).toBe(false);
  });
});

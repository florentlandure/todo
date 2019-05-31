import { Todo } from './Todo';
import { AddTodoParams } from './types';
import { TodoValidator } from './TodoValidator';
import { ValidationException } from './common/ValidationException';

export class TodoFactory {
  static create(params: AddTodoParams): Todo {
    const validator = new TodoValidator();

    if (validator.validate(params)) {
      return new Todo(params.title, params.description);
    }
    throw new ValidationException(validator.errors);
  }
}

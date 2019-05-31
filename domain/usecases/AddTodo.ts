import { UseCase, Repository } from '../common';
import { AddTodoParams } from '../types';
import { Todo } from '../Todo';
import { TodoFactory } from '../TodoFactory';

export class AddTodo extends UseCase {
  repository: Repository<Todo>;

  constructor(repository: Repository<Todo>) {
    super(repository);
  }

  execute(params?: AddTodoParams): Promise<Todo> {
    const todo = TodoFactory.create(params);
    return this.repository.add(todo);
  }
}

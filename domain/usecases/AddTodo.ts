import { UseCase, Repository } from '../common';
import { CreateTodoParams } from '../types';
import { Todo } from '../Todo';

export class AddTodo extends UseCase {
  repository: Repository<Todo>;

  constructor(repository: Repository<Todo>) {
    super(repository);
  }

  execute(params?: CreateTodoParams): Promise<Todo> {
    return this.repository.add(params);
  }
}

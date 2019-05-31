import { Repository } from '../common';
import { Todo } from '../Todo';
import { AddTodoParams } from '../types';

export class TodoRepositoryMock implements Repository<Todo> {
  add(todo: Todo): Promise<Todo> {
    return Promise.resolve(todo);
  }

  getAll(): Promise<Todo[]> {
    throw new Error('Method not implemented.');
  }

  getOneById(id: string): Promise<Todo> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

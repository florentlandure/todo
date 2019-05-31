import { Repository } from '../common';
import { Todo } from '../Todo';
import { CreateTodoParams } from '../types';

export class TodoRepositoryMock implements Repository<Todo> {
  add(params: CreateTodoParams): Promise<Todo> {
    return Promise.resolve(new Todo(params.title, params.description));
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

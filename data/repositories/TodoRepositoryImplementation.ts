import { TodoRepository } from '../../core/repositories';
import { TodoEntity } from '../../core/entities';
import { ICreateTodoParams } from '../../core/common';

export class TodoRepositoryImplemenation extends TodoRepository {
  createTodo(params: ICreateTodoParams): Promise<TodoEntity> {
    return Promise.resolve(new TodoEntity(params.title, params.description));
  }
}

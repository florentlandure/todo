import { Repository } from '../common';
import { ICreateTodoParams } from '../common/CreateTodoParams';
import { TodoEntity } from '../entities';

export abstract class TodoRepository extends Repository {
  abstract createTodo(params: ICreateTodoParams): Promise<TodoEntity>;
}

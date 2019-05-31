import { UseCase, ICreateTodoParams } from '../../common';
import { TodoEntity } from '../../entities';
import { TodoRepository } from '../../repositories';

export class CreateTodo extends UseCase {
  repository: TodoRepository;
  params: ICreateTodoParams;

  constructor(repository: TodoRepository, params: ICreateTodoParams) {
    super(repository);
    this.params = params;
  }

  execute(): Promise<TodoEntity> {
    return this.repository.createTodo(this.params);
  }
}

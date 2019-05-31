import { Repository, IUseCaseParams } from '.';
import { TodoEntity } from '../entities';

export abstract class UseCase {
  repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  abstract execute(params?: IUseCaseParams): Promise<TodoEntity>;
}

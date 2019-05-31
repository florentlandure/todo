import { Repository, IUseCaseParams } from '.';

export abstract class UseCase {
  repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  abstract execute(params?: IUseCaseParams): Promise<any>;
}

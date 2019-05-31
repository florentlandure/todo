import { Repository } from '.';

export abstract class UseCase {
  repository: Repository<any>;

  constructor(repository: Repository<any>) {
    this.repository = repository;
  }

  abstract execute(params?: any): Promise<any>;
}

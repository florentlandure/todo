import { IUseCaseParams } from '.';

export interface ICreateTodoParams extends IUseCaseParams {
  title: string;
  description?: string;
}

import { Repository } from './common';
import { Todo } from './Todo';

export interface TodoRepository extends Repository<Todo> {}

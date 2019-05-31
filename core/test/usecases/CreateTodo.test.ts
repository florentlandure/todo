import { CreateTodo } from '../../usecases/create-todo/CreateTodo';
import { UseCase } from '../../common';
import { TodoEntity } from '../../entities';
import { TodoRepositoryImplemenation } from '../../../data/repositories';

describe('CreateTodo', () => {
  const todoRepo = new TodoRepositoryImplemenation();
  let createTodo: CreateTodo;

  beforeEach(() => {
    createTodo = new CreateTodo(todoRepo, { title: 'Title' });
  });

  test('should be a UseCase', () => {
    expect(createTodo instanceof UseCase).toBe(true);
  });

  test('should have an execute method', () => {
    expect(createTodo.execute).toBeDefined();
  });

  test('should create a todo with a title', async () => {
    expect.assertions(3);
    const todo = await createTodo.execute();
    expect(todo instanceof TodoEntity).toBe(true);
    expect(todo.title).toEqual('Title');
    expect(todo.description).toBeUndefined();
  });

  test('should create a todo with a title and description', async () => {
    expect.assertions(2);
    createTodo.params = {
      title: 'Title',
      description: 'desc'
    };
    const todo = await createTodo.execute();
    expect(todo.title).toEqual('Title');
    expect(todo.description).toEqual('desc');
  });

  test('should be an invalid todo', async () => {
    expect.assertions(3);
    createTodo.params = { title: '', description: 'desc' };
    const todo = await createTodo.execute();
    expect(todo.title).toEqual('');
    expect(todo.description).toBe('desc');
    expect(todo.isValid).toBe(false);
  });
});

import { AddTodo } from '../../usecases';
import { TodoRepositoryMock } from '../TodoRepositoryMock';
import { Todo } from '../../Todo';
import { CreateTodoParams } from '../../types';

describe('AddTodo', () => {
  const mockRepository = new TodoRepositoryMock();
  const addTodo = new AddTodo(mockRepository);

  test('Add a todo', async () => {
    expect.assertions(3);
    const spy = jest.spyOn(mockRepository, 'add');
    const params: CreateTodoParams = { title: 'Title' };
    const todo = await addTodo.execute(params);
    expect(todo instanceof Todo).toBe(true);
    expect(todo.isCompleted).toBe(false);
    expect(spy).toHaveBeenCalledWith(params);
  });

  test('Add a todo without description', async () => {
    expect.assertions(2);
    const todo = await addTodo.execute({ title: 'Title' });
    expect(todo.title).toEqual('Title');
    expect(todo.description).toBeUndefined();
  });

  test('Add a todo with a title and description', async () => {
    expect.assertions(2);
    const todo = await addTodo.execute({
      title: 'Title',
      description: 'Description'
    });
    expect(todo.title).toEqual('Title');
    expect(todo.description).toEqual('Description');
  });
});

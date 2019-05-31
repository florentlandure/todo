import { AddTodo } from '../../usecases';
import { TodoRepositoryMock } from '../TodoRepositoryMock';
import { Todo } from '../../Todo';
import { AddTodoParams } from '../../types';

describe('AddTodo', () => {
  const mockRepository = new TodoRepositoryMock();
  const addTodo = new AddTodo(mockRepository);

  test('Add a todo', async () => {
    expect.assertions(3);
    const spy = jest.spyOn(mockRepository, 'add');
    const params: AddTodoParams = { title: 'Title' };
    const todo = await addTodo.execute(params);
    expect(todo instanceof Todo).toBe(true);
    expect(todo.isCompleted).toBe(false);
    expect(spy).toHaveBeenCalledWith(todo);
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

  test('Add a todo without title', async () => {
    try {
      const todo = await addTodo.execute({ title: '' });
    } catch (err) {
      expect(err.errors.length).toEqual(1);
    }
  });
});

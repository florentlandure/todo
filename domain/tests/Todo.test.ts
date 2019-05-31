import { Todo } from '../Todo';

describe('Todo', () => {
  let todo: Todo;

  beforeEach(() => {
    todo = new Todo('title', 'description');
  });

  test('Should not be completed by default', () => {
    expect(todo.isCompleted).toBe(false);
  });

  test('Update the title of the todo', () => {
    expect(todo.title).toEqual('title');
    todo.title = 'test';
    expect(todo.title).toEqual('test');
  });

  test('Update the description of the todo', () => {
    expect(todo.description).toEqual('description');
    todo.description = 'test';
    expect(todo.description).toEqual('test');
  });

  test('Update the completion status of the todo', () => {
    expect(todo.isCompleted).toBe(false);
    todo.isCompleted = true;
    expect(todo.isCompleted).toBe(true);
  });
});

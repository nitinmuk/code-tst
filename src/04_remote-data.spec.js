const got = require('got');
const solution = require('./04_remote-data');
const { UserTodoFetchError } = require('./error');

jest.mock('got');

const todosURL = 'https://jsonplaceholder.typicode.com/todos';
const usersURL = 'https://jsonplaceholder.typicode.com/users';
const users = [{ id: 1, username: 'Tom'}, { id: 2, username: 'Jerry'}, { id: 3, username: 'Harry'}];
const todos = [{ id: 2, userId: 1, completed: true }, { id: 4, userId: 1, completed: true }, { id: 6, userId: 3, completed: true }];
const error = { error: 'fake error'};

test('Test 1 - must return completed count and username for all users', async () => {
  // Arrange
  got.mockImplementationOnce(() => { return {
    json: () => Promise.resolve(todos),
  }})
  .mockImplementationOnce(() => { return {
    json: () => Promise.resolve(users),
  }});
  const expected = [{ username: 'Tom', completed: 2 }, { username: 'Jerry', completed: 0 }, { username: 'Harry', completed: 1 }];

  // Act
  const actual = await solution();

  // Assert
  expect(actual).toEqual(expected);
  expect(got).toHaveBeenNthCalledWith(1, todosURL);
  expect(got).toHaveBeenNthCalledWith(2, usersURL);
});

test('Test 2 - must throw UserTodoFetchError when request fails to fetch users', async () => {
  // Arrange
  got.mockImplementationOnce(() => { return {
    json: () => Promise.resolve(todos),
  }})
  .mockImplementationOnce(() => { return {
    json: () => Promise.reject(error),
  }});
  const expected = UserTodoFetchError;

  // Act
  let actual;
  try {
    await solution();
  } catch(error) {
    actual = error;
  }

  // Assert
  expect(actual).toBeInstanceOf(UserTodoFetchError);
  expect(got).toHaveBeenNthCalledWith(1, todosURL);
  expect(got).toHaveBeenNthCalledWith(2, usersURL);
});

test('Test 3 - must throw UserTodoFetchError when request fails to fetch todos', async () => {
  // Arrange
  const expected = UserTodoFetchError;
  
  got.mockImplementationOnce(() => { return {
    json: () => Promise.reject(error),
  }})
  .mockImplementationOnce(() => { return {
    json: () => Promise.resolve(users),
  }});

  // Act
  let actual;
  try {
    await solution();
  } catch(error) {
    actual = error;
  }

  // Assert
  expect(actual).toBeInstanceOf(UserTodoFetchError);
  expect(got).toHaveBeenNthCalledWith(1, todosURL);
  expect(got).toHaveBeenNthCalledWith(2, usersURL);
});

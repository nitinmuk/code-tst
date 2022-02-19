const got = require('got');
const createLogger = require('./logger');
const { UserTodoFetchError } = require('./error');

const logger = createLogger('remote-data');

const todosURL = 'https://jsonplaceholder.typicode.com/todos';
const usersURL = 'https://jsonplaceholder.typicode.com/users';
/**
 *  This function fetches all todos from https://jsonplaceholder.typicode.com/todos
 *  and all users from https://jsonplaceholder.typicode.com/users
 *  The function returns how many todos each user has completed.
 *  Example: If user = [{ id: 1, username: 'Tom'}, { id: 2, username: 'Jerry'}]
 *  and todos = [{ id: 2, userId: 1, completed: true}]
 *  Then the function would output [{ username: 'Tom', completed: 1}, { username: 'Jerry', completed: 0}]
 */
async function solution () {
    const todosPromise = got(todosURL).json();
    const usersPromise = got(usersURL).json();
    try {
    const [todos, users] = await Promise.all([todosPromise, usersPromise]);
    return users.map(user => {
        const completed = todos.filter(todo => todo.userId === user.id && todo.completed).length;
        const { username } = user;
        return { username, completed };
    });
   } catch(error) {
       const msg = 'Unexpected error while fetching todos & users';
       logger.error(error, msg);
       throw new UserTodoFetchError(msg);
   }
}

module.exports = solution

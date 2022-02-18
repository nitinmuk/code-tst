const got = require('got');

const todosURL = 'https://jsonplaceholder.typicode.com/todos';
const usersURL = 'https://jsonplaceholder.typicode.com/users';
/**
 *  This function fetches all todos from https://jsonplaceholder.typicode.com/todos
 *  and all users from https://jsonplaceholder.typicode.com/users
 *  The function returns how many todos each user has completed.
 *  Example: If user = [{ id: 1, username: 'Tom'}, { id: 2, username: 'Jerry'}]
 *  and todos = [{ id: 2, userId: 1, completed: true}]
 *  Then the function would output [{ username: 'Tom', completed: 0}, { username: 'Jerry', completed: 1}]
 */
async function solution () {
    const todosPromise = got(todosURL).json();
    const usersPromise = got(usersURL).json();
    const [users, todos] = await Promise.all([usersPromise, todosPromise]);
    return users?.map(user => {
        const completed = todos?.filter(todo => todo.userId === user.id && todo.completed).length;
        const { username } = user;
        return { username, completed };
    });
}

module.exports = solution

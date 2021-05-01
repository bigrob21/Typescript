import axios from 'axios' 

/*
    This is a revised version of index.ts where I create a function (logger) that takes a type of Todo
    and uses the type passed.
*/

let url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(resp => {
    const td = resp.data as Todo;
    logTodo(td);
})

const logTodo = (td: Todo) => {
    console.log(`
        The Todo with ID: ${td.id}
        Has a title of: ${td.title}
        Is it finished: ${td.completed}
    `);
} ;
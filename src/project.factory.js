import { createTodo } from "./todo.factory.js"

function createProject(title="Title") {
    const projects = [];

    const addTodo = (todo) => projects.push(todo);
    const removeTodo = (index) => projects.indexOf(index) !== -1 ? projects.splice(index, 1) : null;
    
    return { projects, addTodo, removeTodo }
}

export { createProject };
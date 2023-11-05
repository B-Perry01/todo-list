import { createTodo } from "./todo.factory.js"

function createProject(title="Title") {
    let projects = [];

    const getTitle = () => title;
    const changeTitle = (newTitle) => title = newTitle;
    //must be able to get todos from their unique title
    const getTask = (taskTitle) => {
        return projects.filter((task) => task.getTitle() === taskTitle)[0];
    }
    const addTask = (todo) => projects.push(todo);
    const removeTask = (taskTitle) => {
        projects = projects.filter((task) => task.getTitle() !== taskTitle);
    }

    //temp function to display the project for now before going to dom manipulation
    const displayProject = () => {
        console.log(title);
        projects.forEach((proj) => proj.logValues());
    }

    return { projects, getTask, addTask, removeTask, getTitle, changeTitle, displayProject }
}

export { createProject };
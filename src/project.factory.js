import { createTodo } from "./todo.factory.js"

function createProject(title="Title") {
    const projects = [];

    const getTitle = () => title;
    const changeTitle = (newTitle) => title = newTitle;
    //must be able to get todos from their unique title
    const getTask = (taskTitle) => {
        return projects.filter((task) => task.getTitle() === taskTitle);
    }
    const addTask = (todo) => projects.push(todo);
    const removeTask = (index) => projects.indexOf(index) !== -1 ? projects.splice(index, 1) : null;

    //temp function to display the project for now before going to dom manipulation
    const displayProject = () => {
        console.log(title);
        projects.forEach((proj) => proj.logValues());
    }

    return { projects, getTask, addTask, removeTask, getTitle, changeTitle, displayProject }
}

export { createProject };
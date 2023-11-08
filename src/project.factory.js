function createProject(title="Title") {
    let todos = [];

    const getTitle = () => title;
    const changeTitle = (newTitle) => title = newTitle;
    //must be able to get todos from their unique title
    const getTask = (taskTitle) => 
        todos.filter((task) => task.getTitle() === taskTitle)[0];
    
    const addTask = (todo) => todos.push(todo);
    const removeTask = (taskTitle) => 
        todos = todos.filter((task) => task.getTitle() !== taskTitle);
    

    //temp function to display the project for now before going to dom manipulation
    const displayProject = () => {
        console.log("\n"+title);
        todos.forEach((proj) => proj.logValues());
    }

    return { todos, getTask, addTask, removeTask, getTitle, changeTitle, displayProject }
}

export { createProject };
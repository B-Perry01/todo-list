function createTodo(title="title", description="", dueDate="", priority=3) {
    //doesn't make sense to be able to change a title & description, just make a new ToDo!
    const getTitle = () => title;
    const getDesc = () => description;
    const changeDate = (newDate) => dueDate = newDate;
    const getDate = () => dueDate;
    const changePrio = (newPrio) => priority = newPrio;
    const getPrio = () => priority;

    function logValues() {
        console.log(`${getTitle()}, ${getDesc()}, ${getDate()}, ${getPrio()}`);
    }

    return {getTitle, getDesc, changeDate, getDate, changePrio, getPrio, logValues}
}

export { createTodo };
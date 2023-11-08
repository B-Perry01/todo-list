import { isToday, isThisWeek } from "date-fns";
import { createProject } from "./project.factory";

function findAll(projects) {
    if (projects.length > 0) {
        const allTasks = createProject("All Tasks");
        for(let i = 0; i < projects.length; i++) {//search through ALL projects
            let project = projects[i];
            project.todos.forEach(todo => allTasks.addTask(todo));
        }
        allTasks.displayProject();
        return allTasks;
    }
    else return null;
}

function findToday(projects) {
    if(projects.length > 0) {
        const todTasks = createProject("Today");
        for(let i = 0; i < projects.length; i++) {
            let project = projects[i];
            project.todos.forEach(todo => {
                if(isToday(todo.getDate()))
                    todTasks.addTask(todo)
            });
        }
        todTasks.displayProject();
        return todTasks;
    }
}

function findWeek(projects) {
    if(projects.length > 0) {
        const weekTasks = createProject("This Week");
        for(let i = 0; i < projects.length; i++) {
            let project = projects[i];
            project.todos.forEach(todo => {
                if(isThisWeek(todo.getDate()))
                    weekTasks.addTask(todo);                
            });
        }
        weekTasks.displayProject();
        return weekTasks;
    }
}

function findImportant(projects) {
    if(projects.length > 0) {
        const imprtntTasks = createProject("Important");
        for(let i = 0; i < projects.length; i++) {
            let project = projects[i];
            project.todos.forEach(todo => {
                if(todo.getPrio())
                    imprtntTasks.addTask(todo);
            })
            imprtntTasks.displayProject();
            return imprtntTasks;
        }
    }

}

export { findAll, findToday, findWeek, findImportant };
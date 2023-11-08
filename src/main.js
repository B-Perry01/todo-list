import "./style.css"
import { createTodo } from "./todo.factory.js";
import { createProject } from "./project.factory.js";
import { setUpPage, showTasksDOM } from "./domManipulation.js";
import { findAll, findToday, findWeek, findImportant } from "./findTasksHelperFunctions.js";

if (process.env.NODE_ENV !== 'production') {
    console.log('DEVELOPMENT MODE');
  }

/*
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
the below code is to just show the todo application working without needing to add all of your own todo lists
*/
import { set } from "date-fns";
const proj1 = createProject("Example Project");
proj1.addTask(createTodo("Title 1", "First Project", Date.now(), true)); 
proj1.addTask(createTodo("Title 2", "Second Project", new Date(null)));
proj1.addTask(createTodo("Title 3", "Third Project", Date.now()));
proj1.addTask(createTodo("Car maintenance", "Change oil and oil filter, air filter and cabin filter", Date.now(), true));
proj1.addTask(createTodo("Replace hard drive", "A hard drive in NAS has went, replace before second harddrive fails and we lose our data!", Date.now(), true));
proj1.addTask(createTodo("Wash car", "Take it to the car wash on 34th Street, it's pretty dirty!", Date.now()));
proj1.addTask(createTodo("Dog walk!", "Walk dog", new Date(null)));

let task = proj1.getTask("Title 1");
task.changeStatus();
proj1.removeTask("Title 2");

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const projects = []; //all projects
projects.push(proj1);
setUpPage(projects); //setup page
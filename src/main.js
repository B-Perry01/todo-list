import "./style.css";
import { createTodo } from "./todo.factory.js";
import { createProject } from "./project.factory.js";
import { setUpPage, showTasksDOM } from "./domManipulation.js";
import { format, toDate } from "date-fns"

if (process.env.NODE_ENV !== 'production') {
    console.log('DEVELOPMENT MODE');
  }

  setUpPage();

/*
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
the below code is to just show the todo application working without needing to add all of your own todo lists
*/

/*
  different date formats:
  cccc do MMMM yyyy => Tuesday 2nd November 2023
  ccc do MMM yy => Tue 5th Nov 23
  dd/MM/yy =>  02/11/23
*/
const dateFormat = "dd/MM/yy";

const proj1 = createProject("Example Project");
proj1.addTask(createTodo("Title 1", "First Project", format(Date.now(), dateFormat), true)); 
proj1.addTask(createTodo("Title 2", "Second Project", format(Date.now(), dateFormat)));
proj1.addTask(createTodo("Title 3", "Third Project", format(Date.now(), dateFormat)));
proj1.addTask(createTodo("Car maintenance", "Change oil and oil filter, air filter and cabin filter", format(Date.now(), dateFormat), true));
proj1.addTask(createTodo("Replace hard drive", "A hard drive in NAS has went, replace before second harddrive fails and we lose our data!", format(Date.now(), dateFormat), true));
proj1.addTask(createTodo("Wash car", "Take it to the car wash on 34th Street, it's pretty dirty!", "No date"));
proj1.addTask(createTodo("Dog walk!", "Walk dog", format(Date.now(), dateFormat)));

let task = proj1.getTask("Title 1");
task.changeStatus();
proj1.removeTask("Title 2");
showTasksDOM(proj1);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const projects = []; //all projects
projects.push(proj1);
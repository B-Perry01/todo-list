import "./style.css";
import { createTodo } from "./todo.factory.js";
import { createProject } from "./project.factory.js";
import { format, toDate } from "date-fns"

if (process.env.NODE_ENV !== 'production') {
    console.log('DEVELOPMENT MODE');
  }

/*
  different date formats:
  cccc do MMMM yyyy => Tuesday 2nd November 2023
  ccc do MMM yy => Tue 5th Nov 23
  dd/MM/yy =>  02/11/23
*/
const dateFormat = "ccc do MMM yy";

/*
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
the below code is to just show the todo application working without needing to add all of your own todo lists
*/

const proj1 = createProject("Example Project");
proj1.addTask(createTodo("Title 1", "First Project", format(Date.now(), dateFormat), 3)); 
proj1.addTask(createTodo("Title 2", "Second Project", format(Date.now(), dateFormat), 1));
proj1.addTask(createTodo("Title 3", "Third Project", format(Date.now(), dateFormat), 2));
proj1.addTask(createTodo("Car maintenance", "Change oil and oil filter, air filter and cabin filter", format(Date.now(), dateFormat), 3));
proj1.addTask(createTodo("Replace hard drive", "A hard drive in NAS has went, replace before second harddrive fails and we lose our data!", format(Date.now(), dateFormat), 3));
proj1.addTask(createTodo("Wash car", "Take it to the car wash on 34th Street, it's pretty dirty!", "No date", 1));
proj1.addTask(createTodo("Dog walk!", "Walk dog", format(Date.now(), dateFormat), 1));

let task = proj1.getTask("Title 1");
task.changeStatus();
task.logValues();
proj1.displayProject();
proj1.removeTask("Title 2");
proj1.displayProject();

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
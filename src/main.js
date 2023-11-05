import "./style.css";
import { createTodo } from "./todo.factory.js";
import { createProject } from "./project.factory.js";

if (process.env.NODE_ENV !== 'production') {
    console.log('DEVELOPMENT MODE');
  }


/*
    this is to imitate real storage and show an example of the todo app working
*/

const proj1 = createProject("Example Project");
proj1.addTask(createTodo("Title 1", "First Project", "01/01", 3)); 
proj1.addTask(createTodo("Title 2", "Second Project", "02/01", 1));
proj1.addTask(createTodo("Title 3", "Third Project", "03/01", 2));
proj1.addTask(createTodo("Car maintenance", "Change oil and oil filter, air filter and cabin filter", "01/03", 3));
proj1.addTask(createTodo("Replace hard drive", "A hard drive in NAS has went, replace before second harddrive fails and we lose our data!", "02/03", 3));
proj1.addTask(createTodo("Wash car", "Take it to the car wash on 34th Street, it's pretty dirty!", "", 1));
proj1.addTask(createTodo("Dog walk!", "Walk dog", "03/03", 1));

let task = proj1.getTask("Title 1");
console.log(proj1.projects);
console.log(task);

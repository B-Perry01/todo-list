import "./style.css";
import { createTodo } from "./todo.factory.js";

if (process.env.NODE_ENV !== 'production') {
    console.log('DEVELOPMENT MODE');
  }

let todo1 = createTodo();
todo1.logValues();
todo1.changePrio(2);
todo1.logValues();

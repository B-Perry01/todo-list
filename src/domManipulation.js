import { format } from "date-fns";
import { findAll, findToday, findWeek, findImportant } from "./findTasksHelperFunctions.js";

function addTaskModal(proj) {
    const modal = document.createElement("")
}

function showTasksDOM (proj){
    const tasksCont = document.getElementById("tasks");
    tasksCont.innerHTML = "";
    const projTitle = document.getElementById("proj-title");
    projTitle.textContent = proj.getTitle();
    proj.todos.forEach(todo => {
        const todoCont = document.createElement("div");
        const header = document.createElement("div");
        const title = document.createElement("h3");
        const headerSubSec = document.createElement("div");
        const date = document.createElement("h4");
        const priority = document.createElement("img");
        const editDel = document.createElement("button");
        const desc = document.createElement("p");

        todoCont.classList.add("todo");
        header.classList.add("todo-header");
        title.classList.add("title");
        headerSubSec.classList.add("header-sub");
        date.classList.add("date");
        //editDel.classList.add("");
        if (todo.getPrio() === true) {
            priority.classList.add("starred");
            priority.src = "#";
            priority.alt = "golden star";
        } 
        else {
            priority.src = "#";
            priority.alt = "colourless star";
        }
        
        desc.classList.add("desc");
        title.textContent = todo.getTitle();
        editDel.textContent = "Edit/Del";
        desc.textContent = todo.getDesc();
        /*
        different date formats:
        cccc do MMMM yyyy => Tuesday 2nd November 2023
        ccc do MMM yy => Tue 5th Nov 23
        dd/MM/yy =>  02/11/23
        */
        const dateFormat = "dd/MM/yy";
        date.textContent = format(todo.getDate(), dateFormat);

        headerSubSec.appendChild(date);
        headerSubSec.appendChild(priority);
        headerSubSec.appendChild(editDel);
        header.appendChild(title);
        header.appendChild(headerSubSec);
        todoCont.appendChild(header);
        todoCont.appendChild(desc);
        tasksCont.appendChild(todoCont);
    });
}

function setUpPage(projects) {
    //toggling navbar
    const navBtn = document.getElementById("nav-btn");
    const navBar = document.getElementById("nav-bar");
    navBtn.addEventListener("click", event => navBar.classList.toggle("hidden")
    );

    //setup links for navbar
    const allTasks = document.getElementById("all-tasks");
    const tday = document.getElementById("today");
    const thisWeek = document.getElementById("week");
    const starred = document.getElementById("starred");

    const showAllTasks = () => showTasksDOM(findAll(projects));
    const showTodayTasks = () => showTasksDOM(findToday(projects));
    const showWeeklyTasks = () => showTasksDOM(findWeek(projects));
    const showStarredTasks = () => showTasksDOM(findImportant(projects));

    allTasks.addEventListener("click", showAllTasks);
    tday.addEventListener("click", showTodayTasks);
    thisWeek.addEventListener("click", showWeeklyTasks);
    starred.addEventListener("click", showStarredTasks);

    //display & setup links for projects in navbar
    const projList = document.getElementById("proj-list");
    projects.forEach(project => {
        const projNavTitle = document.createElement("li");
        projNavTitle.textContent = project.getTitle();
        projNavTitle.addEventListener("click", event => {
            showTasksDOM(project);
        })
        projList.appendChild(projNavTitle);        
    });
    const addProj = document.getElementById("add-proj");
    addProj.addEventListener("click", event => {        
        //add form here
    });

}


export { setUpPage, showTasksDOM };
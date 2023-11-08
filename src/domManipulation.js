function setUpPage() {
    const navBtn = document.getElementById("nav-btn");
    navBtn.addEventListener("click", event => {
        const navBar = document.getElementById("nav-bar");
        navBar.classList.toggle("hidden"); //if hidden is set remove it, otherwise add it
    });
}

function showTasksDOM (proj){
    const tasksCont = document.getElementById("tasks");
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
        if (todo.getPrio() === true) {
            priority.classList.add("starred");
            priority.src = "#";
            priority.alt = "golden star";
        } 
        else {
            priority.src = "#";
            priority.alt = "colourless star";
        }
        //editDel.classList.add("");
        desc.classList.add("desc");

        title.textContent = todo.getTitle();
        date.textContent = todo.getDate();
        editDel.textContent = "Edit/Del";
        desc.textContent = todo.getDesc();

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

export { setUpPage, showTasksDOM };
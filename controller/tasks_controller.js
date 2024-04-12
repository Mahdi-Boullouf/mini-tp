
const tasksTable = "tasks";
function addTask() {
    var taskUserId = sessionStorage.getItem("userId");
    var taskTitle = document.getElementById("taskTitle").value; 
    var taskDeadline = document.getElementById("deadline").value;
    var task = {id:Date.now(),title: taskTitle,deadline: taskDeadline,taskUserId: taskUserId};
    if (localStorage.getItem(tasksTable) == null) {
        localStorage.setItem(tasksTable, JSON.stringify([task]));
    } else {
        var tasksList = JSON.parse(localStorage.getItem(tasksTable));
        tasksList.push(task);
        localStorage.setItem(tasksTable, JSON.stringify(tasksList));
    }

    window.location.pathname= '../view/tasks.html';
}

function deleteTask(task) {
    var tasksList = JSON.parse(localStorage.getItem(tasksTable));
    console.log(task.id);
    var newTasks = tasksList.filter((value) => {
        console.log(value);
        return value.id != task.id;
    });
    console.log(tasksList)
    console.log(newTasks);
    localStorage.clear()
    localStorage.setItem(tasksTable, JSON.stringify(newTasks));
    window.location.pathname = "../view/tasks.html"
}

function showTasks() {
    var notesList = JSON.parse(localStorage.getItem(tasksTable))
    console.log(notesList)
    if(notesList != null){
        var notesGrid = document.getElementById("tasks");
        for (const note of notesList) {
            var card = document.createElement("div");
            card.className = "card";
            card.style.marginBottom= "12px"
            card.innerHTML = `
                <div style="width:100%; display: flex;justify-content: space-between;align-items: center;">
                    <h1>${note.title}</h1>
                    <i id="${note.id}" onclick='deleteNote(this)' class="fa fa-trash-o" style="font-size:24px;cursor:hand;"></i>
                </div>
                
            `;
            notesGrid.appendChild(card);
    }
    
    }
}


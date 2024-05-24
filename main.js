const inputElmt = document.getElementById("input");
const Task = document.getElementsByClassName("Task");
const TasksElmt = document.getElementsByClassName("Tasks")[0];
const checkBox = document.getElementsByClassName("checkBox");
const removeTask = document.getElementsByClassName("removeTask");
let index = 0;
function createTask() {
    if (inputElmt.value == "") {
        window.alert("Please enter a task name!");
    }
    else {
        const TaskSample = `
        <div class="Task">
            <div class="checkBox"><ion-icon name="checkmark-outline"></ion-icon></div>
            <div class="sampleTask">${inputElmt.value}</div>
            <div class="removeTask"><ion-icon name="close-outline"></ion-icon></div>
        </div>`;
        TasksElmt.innerHTML += TaskSample;
        inputElmt.value = '';
    }
    for (let i = 0; i < removeTask.length; i++) {
        removeTask[i].addEventListener("click", () => {
            TasksElmt.removeChild(TasksElmt.children[i]);
        });
    }
    for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].addEventListener("click", () => {
            Task[i].style.textDecoration = "line-through";
            Task[i].style.opacity = "0.5";
            Task[i].style.pointerEvents = "none";
            checkBox[i].style.backgroundColor = "rgb(0,0,0,0.5)";
        });
    }
}
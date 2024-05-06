const inputElmt = document.getElementById("input");
const TaskSample = document.getElementsByClassName("Task").innerHTML;
const Tasks = document.getElementsByClassName("Tasks")[0];
let index = 0;
function createTask()
{
    index++;
    Tasks.innerHTML += TaskSample;
    Tasks.children[1].textContent = inputElmt.value;
}
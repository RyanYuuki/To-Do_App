const inputElmt = document.getElementById("input");
const TaskSample = `
<div class="Task">
<div class="checkBox"><ion-icon name="checkmark-outline"></ion-icon></div>
<div class="sampleTask">${inputElmt.value}</div>
<div class="removeTask"><ion-icon name="close-outline"></ion-icon></div>
</div>
`
const Tasks = document.getElementsByClassName("Tasks")[0];
let index = 0;
function createTask()
{
    index++;
    Tasks.innerHTML += TaskSample;
}
document.getElementById("add-task").addEventListener("click", function () {
    var taskInput = document.getElementById("task-value");
    alert("User entered: " + taskInput.value);
    taskInput.value = "";
  });

function addTask(taskValue) {
    var task = document.createElement("li");
    task.classList.add("task");
    task.classList.add("fill");
    task.setAttribute("draggable", "true");
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
  
    var taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    taskContent.innerText = taskValue;
  
    var trash = document.createElement("div");
    trash.classList.add("trash");
    trash.innerHTML = "&times;";
    trash.addEventListener("click", removeTask);
  
    task.appendChild(taskContent);
    task.appendChild(trash);
  
    var tasks = document.getElementById("tasks-added");
    tasks.insertBefore(task, tasks.childNodes[0]);
}
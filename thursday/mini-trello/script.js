document.getElementById("add-task").addEventListener("click", function () {
  var taskInput = document.getElementById("task-value");
  //alert("User entered: " + taskInput.value);
  addTask(taskInput.value);
  taskInput.value = "";
});

/* fix this */
document.getElementById("task-value").addEventListener("keyup", (event) => {
  if (event.key == "Enter" && event.code == "Enter") {
    var taskInput = document.getElementById("task-value");
    addTask(taskInput.value);
    taskInput.value = "";
  }
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
    var bin = document.createElement("i");
    bin.setAttribute("class", "fas fa-trash-alt");
    trash.appendChild(bin);
    trash.addEventListener("click", removeTask);
  
    var edit = document.createElement("div");
    edit.classList.add("edit");
    var pen = document.createElement("i");
    pen.setAttribute("class", "fas fa-pencil-alt");
    edit.appendChild(pen);
    edit.addEventListener("click", taskEdit);

    var done = document.createElement("div");
    done.classList.add("done");
    var check = document.createElement("i");
    check.setAttribute("class", "fas fa-check-circle");
    done.appendChild(check);
    done.addEventListener("click", moveDone);

    var review = document.createElement("div");
    review.classList.add("review");
    var mark = document.createElement("i");
    mark.setAttribute("class", "fas fa-exclamation-circle");
    review.appendChild(mark);
    review.addEventListener("click", moveReview);

    var progress = document.createElement("div");
    progress.classList.add("progress");
    var arrow = document.createElement("i");
    arrow.setAttribute("class", "fas fa-arrow-circle-right");
    progress.appendChild(arrow);
    progress.addEventListener("click", moveInProgress);

    task.appendChild(taskContent);
    task.appendChild(trash);
    task.appendChild(edit);
    task.appendChild(done);
    task.appendChild(review);
    task.appendChild(progress);

    var tasks = document.getElementById("tasks-added");
    tasks.insertBefore(task, tasks.childNodes[0]);
}

// DRAG START
var task;
// A global variable to store the selected task

function dragStart(event) {
  event.target.classList.add("hold"); // class .hold is added to the task div
  task = event.target; // task div is set as the event.target
  setTimeout(function () {
    event.target.classList.add("invisible"); // here the task div that has started drag is named w class .invisible
  }, 0);
}

// DRAG END
function dragEnd(event) {
  event.target.classList.remove("invisible"); // here the class .invisible is removed from the task div that has ended drag 
}

// EDIT TASK
function taskEdit(event) { // event represents the pencil edit task button
  var task = event.target.parentNode.parentNode; // target li parent node
  var oldTaskContent = task.childNodes[0]; // target the task-content
  task.removeChild(oldTaskContent); // remove task-content

  var newTaskContent = document.createElement("div"); // create a new task-content with an input in place of the old one
  newTaskContent.classList.add("new-task-content");
  var newTaskInput = document.createElement("input"); 
  newTaskInput.setAttribute("id", "new-task-input");
  newTaskInput.setAttribute("type", "text");
  newTaskInput.setAttribute("placeholder", "Edit task");

  newTaskContent.appendChild(newTaskInput);
  task.appendChild(newTaskContent);

  var tasks = document.getElementById("tasks-added");
  tasks.insertBefore(task, tasks.childNodes[0]);

  document.getElementById("new-task-input").addEventListener("keyup", (event) => {
    if (event.key == "Enter" && event.code == "Enter") {
      var saveNewTask = document.getElementById("new-task-input");
      //var newTask = document.getElementById("new-task-content");
      var newTask = saveNewTask.parentNode;
      newTask.removeChild(saveNewTask);
      newTask.innerHTML = saveNewTask.value;
    }
  });
}

// REMOVE TASK
function removeTask(event) { // event represents the remove button
  var tasks = event.target.parentNode.parentNode.parentNode; // Access the <ul> list by moving 3 levels up
  var task = event.target.parentNode.parentNode; // Access the <li> element which is the direct parent
  tasks.removeChild(task);
}
  
// Drag & drop into another col
function dragEnter(event) {
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("hovered"); // if the col contains the class .dropzone, the class .hovered will be added to the task div 
  }
}

function dragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy'; // https://stackoverflow.com/a/35428657
}
  
function dragLeave(event) {
  event.target.classList.remove("hovered");
}
  
function dragDrop(event) { // event represents the column
  event.target.classList.remove("hovered");
  event.target.childNodes[3].append(task); // Add the task to the right child. Inspect the element to find the ul is index 3 in childnodes.
}
  
var dropzones = document.getElementsByClassName("dropzone");
  
for (var index = 0; index < dropzones.length; index++) {
  const dropzone = dropzones[index];
  dropzone.addEventListener("dragenter", dragEnter);
  dropzone.addEventListener("dragover", dragOver);
  dropzone.addEventListener("dragleave", dragLeave);
  dropzone.addEventListener("drop", dragDrop);
} // The for loop adds the event handler functions dragEnter, dragOver, dragLeave, dragDrop to all columns.

// MOVE TO DONE
function moveDone(event){ // event represents the done button
  var location = event.target.parentNode.parentNode.parentNode.parentNode; // access col dropzone
  var tasks = location.childNodes[1];
  var task = event.target.parentNode.parentNode; // access li/specific task
  const destination = dropzones[3]
  destination.childNodes[3].append(task); // append task to done col
}

// MOVE TO REVIEW
function moveReview(event){ // event represents the done button
  var location = event.target.parentNode.parentNode.parentNode.parentNode; // access col dropzone
  var tasks = location.childNodes[1];
  var task = event.target.parentNode.parentNode; // access li/specific task
  const destination = dropzones[2]
  destination.childNodes[3].append(task); // append task to done col
}

// MOVE TO IN PROGRESS
function moveInProgress(event){ // event represents the done button
  var location = event.target.parentNode.parentNode.parentNode.parentNode; // access col dropzone
  var tasks = location.childNodes[1];
  var task = event.target.parentNode.parentNode; // access li/specific task
  const destination = dropzones[1]
  destination.childNodes[3].append(task); // append task to done col
}

const taskTodo = document.getElementById("taskTodoList");
const taskInProgress = document.getElementById("taskInProgressList");
const taskDone = document.getElementById("taskDoneList");
const taskBlocked = document.getElementById("taskBlockedList");
const addTaskBttn = document.getElementById("addTaskBttn");
const hadgalahBttn = document.getElementById("save-bttn");
const taskStatus = document.getElementById("status");
const inputTask = document.getElementById("task-input");
const editBttn = document.getElementById("edit-button");
const deleteBttn = document.getElementById("delete-button");

const tasks = [
  { name: "Task 1", status: "INPROGRESS" },
  { name: "Task 2", status: "DONE" },
  { name: "Task 3", status: "BLOCKED" },
];

/* new task card
  <div class="d-flex justify-content-between align-items-center border border-0 rounded p-2 container-card">
    <i class="bi bi-circle mb-3 me-2"></i>
    <span class="gray-fond">${tasks[i].name}</span>
    <div class="d-flex justify-content-between align-items-center">
      <button class="btn d-flex justify-content-between align-items-center btn-icon btn-icon-1">
        <i class="bi bi-pencil"></i>
      </button>
      <button class="btn d-flex justify-content-between align-items-center btn-icon btn-icon-2">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  </div>; */

function zurah() {
  taskTodo.innerHTML = "";
  taskInProgress.innerHTML = "";
  taskDone.innerHTML = "";
  taskBlocked.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    console.log("TASKS", tasks);
    const newTaskCard = `
      <div class="d-flex justify-content-between align-items-center border border-0 rounded p-2 container-card mb-3">
    <i class="bi bi-circle mb-3 me-2"></i>
    <span class="gray-fond">${tasks[i].name}</span>
    <div class="d-flex justify-content-between align-items-center">
      <button class="btn d-flex justify-content-between align-items-center btn-icon btn-icon-1" id="edit-button">
        <i class="bi bi-pencil"></i>
      </button>
      <button class="btn d-flex justify-content-between align-items-center btn-icon btn-icon-2" id="delete-button">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  </div>
   `;

    switch (tasks[i].status) {
      case "TODO": {
        taskTodo.innerHTML += newTaskCard;
        break;
      }
      case "INPROGRESS": {
        taskInProgress.innerHTML += newTaskCard;
        break;
      }
      case "DONE": {
        taskDone.innerHTML += newTaskCard;
        break;
      }
      case "BLOCKED": {
        taskBlocked.innerHTML += newTaskCard;
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }
  }
}

hadgalahBttn.addEventListener("click", function () {
  const newTask = {
    name: inputTask.value,
    status: taskStatus.value,
  };
  tasks.push(newTask);
  zurah();
  console.log("TASKS", tasks);
});
zurah();

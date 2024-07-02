const taskTodo = document.getElementById("taskTodoList");
const taskInProgress = document.getElementById("taskInProgressList");
const taskDone = document.getElementById("taskDoneList");
const taskBlocked = document.getElementById("taskBlockedList");
const addTaskBttn = document.getElementById("addTaskBttn");
const hadgalahBttn = document.getElementById("save-bttn");
const taskStatus = document.getElementById("status");
const inputTask = document.getElementById("task-input");
const taskModal = document.getElementById("taskModal");

// const editBttn = document.getElementById("edit-button");
// const deleteBttn = document.getElementById("delete-button");

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
      <div class="d-flex justify-content-between align-items-center border border-2 rounded p-2 container-card mb-3 container-card-body ${statusColor(
        tasks[i].status
      )}">
    <i class="bi bi-circle mb-3 me-2"></i>
    <span class="gray-fond">${tasks[i].name} - ${i}</span>
    <div class="d-flex justify-content-between align-items-center">
      <button class="btn d-flex justify-content-between align-items-center btn-icon btn-icon-1" id="edit-button" onclick="taskUurchluh(${i})">
        <i class="bi bi-pencil"></i>
      </button>
      <button class="btn d-flex justify-content-between align-items-center btn-icon btn-icon-2" id="delete-button" onclick="taskUstgah(${i})">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  </div>
   `;
    console.log("status", statusColor(tasks[i].status));
    switch (tasks[i].status) {
      case "TODO": {
        taskTodo.innerHTML += newTaskCard;
        // statusColor = function () {
        //   return "";
        // };
        // statusColor();
        break;
      }
      case "INPROGRESS": {
        taskInProgress.innerHTML += newTaskCard;
        // statusColor = function () {
        //   return "border-warning-subtle";
        // };
        // statusColor();
        break;
      }
      case "DONE": {
        taskDone.innerHTML += newTaskCard;
        // statusColor = function () {
        //   return "border-success-subtle";
        // };
        // statusColor();
        break;
      }
      case "BLOCKED": {
        taskBlocked.innerHTML += newTaskCard;
        // statusColor = function () {
        //   return "border-danger";
        // };
        // statusColor();
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }
  }
}

// status = tasks[i].status
function statusColor(status) {
  switch (status) {
    case "TODO": {
      return "";
    }
    case "INPROGRESS": {
      return "border-warning-subtle";
    }
    case "DONE": {
      return "border-success-subtle";
    }
    case "BLOCKED": {
      return "border-danger";
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

const taskUstgah = (taskIndex) => {
  console.log(tasks);
  tasks.splice(taskIndex, 1);
  zurah();
  console.log("tasks length", taskIndex);
};

const taskUurchluh = (taskModal) => {
  return 'data-bs-toggle="modal" data-bs-target="#taskModal"';
};

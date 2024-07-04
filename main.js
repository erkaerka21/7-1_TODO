const taskTodo = document.getElementById("taskTodoList");
const taskInProgress = document.getElementById("taskInProgressList");
const taskDone = document.getElementById("taskDoneList");
const taskBlocked = document.getElementById("taskBlockedList");
const addTaskBttn = document.getElementById("addTaskBttn");
const hadgalahBttn = document.getElementById("save-bttn");
const taskStatus = document.getElementById("status");
const inputTask = document.getElementById("task-input");
const taskModal = document.getElementById("taskModal");
const countTodo = document.getElementById("countTodoTasks");
const countInProgress = document.getElementById("countInProgressTasks");
const countDone = document.getElementById("countDoneTasks");
const countBlocked = document.getElementById("countBlockedTasks");
let todoArr = [];
let progressArr = [];
let doneArr = [];
let blockedArr = [];

// const editBttn = document.getElementById("edit-button");
// const deleteBttn = document.getElementById("delete-button");

const tasks = [
  { name: "Task 1", status: "INPROGRESS" },
  { name: "Task 2", status: "DONE" },
  { name: "Task 3", status: "BLOCKED" },
];

let editlegdsen = false;
let editIndex = -1;

// tasks[0].name  = "tasj 2"

// currentTask.value = editTask.value
// delete = delete done

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
  let blockedNumber = 0;
  let doneNumber = 0;
  let inProgressNum = 0;
  let todoNumber = 0;
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
      <button class="btn d-flex justify-content-between align-items-center btn-icon btn-icon-1" id="edit-button" onclick="taskUurchluh(${i})" data-bs-toggle="modal" data-bs-target="#taskModal">
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
        // todoNumber = taskTodo.childElementCount;
        // countTodo.textContent = todoNumber;
        // todoArr.push(tasks[i].name);
        // console.log("todo Arr iin elementuud", todoArr);
        // console.log("todo Arr iin urt", todoArr.length);
        todoNumber++;
        console.log("todo numberiin too", todoNumber);
        // statusColor = function () {
        //   return "";
        // };
        // statusColor();
        break;
      }
      case "INPROGRESS": {
        taskInProgress.innerHTML += newTaskCard;
        // InProgressNum = taskInProgress.childElementCount;
        // countInProgress.textContent = InProgressNum;
        // statusColor = function () {
        //   return "border-warning-subtle";
        // };
        // statusColor();
        inProgressNum++;
        console.log("inprogress numberiin too", inProgressNum);
        break;
      }
      case "DONE": {
        taskDone.innerHTML += newTaskCard;
        // doneNumber = taskDone.childElementCount;
        // countDone.textContent = doneNumber;
        // statusColor = function () {
        //   return "border-success-subtle";
        // };
        // statusColor();
        doneNumber++;
        console.log("done numberiin too", doneNumber);
        break;
      }
      case "BLOCKED": {
        taskBlocked.innerHTML += newTaskCard;
        // blockedNumber = taskBlocked.childElementCount;
        // countBlocked.textContent = blockedNumber;
        // statusColor = function () {
        //   return "border-danger";
        // };
        // statusColor();
        blockedNumber++;
        console.log("blocked numberiin too", blockedNumber++);
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }
  }

  // switch (tasks[i].status) {
  //   case "TODO": {
  //     todoArr.push(tasks[i].name);
  //     console.log("todo arr iin too", todoArr);
  //   }
  //   case "INPROGRESS": {
  //   }
  // }
  console.log("TODO", todoNumber);
  countTodo.textContent = todoNumber;
  countInProgress.textContent = inProgressNum;
  countDone.textContent = doneNumber;
  countBlocked.textContent = blockedNumber;
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
  if (editlegdsen) {
    tasks[editIndex].name = inputTask.value;
    tasks[editIndex].status = taskStatus.value;

    editlegdsen = false;
  } else {
    const newTask = {
      name: inputTask.value,
      status: taskStatus.value,
    };
    tasks.push(newTask);
  }
  inputTask.value = "";
  taskStatus.value = "TODO";
  zurah();
  console.log("TASKS", tasks);
});
zurah();

const taskUstgah = (taskIndex) => {
  console.log(tasks);
  tasks.splice(taskIndex, 1);
  zurah();
  // console.log("tasks length", taskIndex);
};

const taskUurchluh = (taskIndex) => {
  inputTask.value = tasks[taskIndex].name;
  taskStatus.value = tasks[taskIndex].status;
  console.log(taskIndex);
  editlegdsen = true;
  editIndex = taskIndex;
};

// function todoTooloh() {
//   zurah();
//   for (let index = 0; index < tasks.length; index++) {
//     if (tasks[index].status === "TODO") {
//       todoArr.push(tasks[index].status);
//     }
//     console.log("todo arr iiin urt", todoArr.length);
//   }

// todoNumber = 0;
// InProgressNum = 0;
// doneNumber = 0;
// blockedNumber = 0;

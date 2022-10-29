const input = document.getElementById("input");
const button = document.getElementById("button");
const result = document.getElementById("result");
const list = document.getElementById("myList");
const completedTasks = document.getElementById("completedTasks");

let tasks = [];
let tasksCompleted = 0;

function updateTasks() {
  completedTasks.innerText = `${tasksCompleted}/${tasks.length} completed`;
}

function addTask(event) {
  event.preventDefault();
  const newList = document.createElement("li");
  newList.innerHTML = `
    <div class="task" name="task">
      <input type="checkbox" name="checkbox" />
      <p>${input.value}</p>
    </div>
    `;
  list.prepend(newList);
  tasks.unshift({ text: input, timestamp: Date.now() });
  console.log(tasks.length);
  updateTasks();
}

button.addEventListener("click", (event) => addTask(event));

list.addEventListener("click", () => {
  let counter = 0;
  const tasks = document.querySelectorAll("[name=task]");
  tasks.forEach((task) => {
    if (task.firstElementChild.checked) {
      task.lastElementChild.style.textDecoration = "line-through";
      counter++;
    } else {
      task.lastElementChild.style.textDecoration = "none";
    }
  });
  tasksCompleted = counter;
  updateTasks();
});



const tasks = []
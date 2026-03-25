const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filters = document.querySelectorAll(".filter");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

// ✅ ADD TASK
addBtn.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") return;

  tasks.push({
    id: crypto.randomUUID(),
    text,
    completed: false,
  });

  input.value = "";
  saveAndRender();
});

// ✅ EVENT DELEGATION (VERY IMPORTANT)
taskList.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;

  const id = button.dataset.id;

  if (button.classList.contains("complete-btn")) {
    toggleTask(id);
  }

  if (button.classList.contains("delete-btn")) {
    deleteTask(id);
  }
});

// ✅ TOGGLE TASK
function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  saveAndRender();
}

// ✅ DELETE TASK
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveAndRender();
}

// ✅ FILTERS
filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");

    currentFilter = btn.dataset.type;
    renderTasks();
  });
});

// ✅ RENDER TASKS
function renderTasks() {
  taskList.innerHTML = "";

  let filteredTasks = tasks.filter((task) => {
    if (currentFilter === "completed") return task.completed;
    if (currentFilter === "pending") return !task.completed;
    return true;
  });

  // Edge case: empty list
  if (filteredTasks.length === 0) {
    taskList.innerHTML = "<p>No tasks found</p>";
    return;
  }

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");

    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
            <span>${task.text}</span>
            <div class="actions">
                <button class="complete-btn" data-id="${task.id}">✔</button>
                <button class="delete-btn" data-id="${task.id}">🗑</button>
            </div>
        `;

    taskList.appendChild(li);
  });
}

// ✅ SAVE + RENDER
function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

// ✅ INITIAL LOAD
renderTasks();

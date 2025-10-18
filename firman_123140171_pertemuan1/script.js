const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const searchInput = document.getElementById("search");
const statusFilter = document.getElementById("status-filter");
const remainingTasks = document.getElementById("remaining-tasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  const searchTerm = searchInput.value.toLowerCase();
  const status = statusFilter.value;

  const filteredTasks = tasks.filter(task => {
    const matchCourse = task.course.toLowerCase().includes(searchTerm);
    const matchStatus =
      status === "all" ||
      (status === "pending" && !task.completed) ||
      (status === "completed" && task.completed);
    return matchCourse && matchStatus;
  });

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;
    li.innerHTML = `
      <div>
        <strong>${task.name}</strong> - ${task.course}<br>
        <small>Deadline: ${task.deadline}</small>
      </div>
      <div class="task-buttons">
        <button onclick="toggleComplete(${index})" title="Tandai Selesai">✅</button>
        <button onclick="editTask(${index})" title="Edit Tugas">✏️</button>
        <button onclick="deleteTask(${index})" title="Hapus Tugas">🗑️</button>
      </div>
    `;
    taskList.appendChild(li);
  });

  const pendingCount = tasks.filter(t => !t.completed).length;
  remainingTasks.textContent = `Tugas Belum Selesai: ${pendingCount}`;
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("task-name").value.trim();
  const course = document.getElementById("course-name").value.trim();
  const deadline = document.getElementById("deadline").value;

  if (!name || !course || !deadline) {
    alert("Semua field harus diisi!");
    return;
  }

  const newTask = { name, course, deadline, completed: false };
  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskForm.reset();
});

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function editTask(index) {
  const newName = prompt("Edit Nama Tugas:", tasks[index].name);
  const newCourse = prompt("Edit Mata Kuliah:", tasks[index].course);
  const newDeadline = prompt("Edit Deadline (YYYY-MM-DD):", tasks[index].deadline);

  if (!newName || !newCourse || !newDeadline) {
    alert("Semua field harus diisi saat mengedit!");
    return;
  }

  tasks[index].name = newName;
  tasks[index].course = newCourse;
  tasks[index].deadline = newDeadline;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  if (confirm("Apakah Anda yakin ingin menghapus tugas ini?")) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }
}

searchInput.addEventListener("input", renderTasks);
statusFilter.addEventListener("change", renderTasks);
renderTasks();

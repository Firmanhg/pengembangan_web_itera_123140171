async function getWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-5.45&longitude=105.26&current_weather=true"
    );
    const data = await response.json();
    const temp = data.current_weather.temperature;
    document.getElementById("weather").textContent = `Cuaca Bandar Lampung: ${temp}°C`;
  } catch (error) {
    document.getElementById("weather").textContent = "Gagal memuat cuaca";
  }
}
getWeather();

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("clock").textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const activeTasks = document.getElementById("activeTasks");
const addTaskBtn = document.getElementById("addTaskBtn");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${task.name}</td>
      <td><input type="date" value="${task.deadline}" class="calendar-input" onchange="updateDeadline(${task.id}, this.value)" /></td>
      <td class="priority ${task.priority}">${task.priority}</td>
      <td>${task.completed ? "✅ Selesai" : "⏳ Belum"}</td>
      <td>
        <button onclick="editTask(${task.id})">Edit</button>
        <button onclick="toggleComplete(${task.id})">${task.completed ? "Batalkan" : "Selesai"}</button>
        <button onclick="deleteTask(${task.id})">Hapus</button>
      </td>
    `;
    taskList.appendChild(row);
  });
  updateStats();
}

addTaskBtn.addEventListener("click", () => {
  const name = document.getElementById("taskInput").value.trim();
  const deadline = document.getElementById("deadlineInput").value;
  const priority = document.getElementById("priorityInput").value;

  if (!name || !deadline) {
    alert("Isi nama dan tanggal tenggat terlebih dahulu!");
    return;
  }

  const newTask = {
    id: Date.now(),
    name,
    deadline,
    priority,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  document.getElementById("taskInput").value = "";
  document.getElementById("deadlineInput").value = "";
});

function editTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  const newName = prompt("Ubah nama tugas:", task.name);
  if (newName === null || newName.trim() === "") return;

  const newPriority = prompt("Ubah prioritas (low, medium, high):", task.priority);
  if (!["low", "medium", "high"].includes(newPriority.toLowerCase())) return alert("Prioritas tidak valid!");

  task.name = newName.trim();
  task.priority = newPriority.toLowerCase();
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

function toggleComplete(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
    renderTasks();
  }
}

function updateDeadline(id, newDate) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.deadline = newDate;
    saveTasks();
    renderTasks();
  }
}

function updateStats() {
  totalTasks.textContent = tasks.length;
  completedTasks.textContent = tasks.filter((t) => t.completed).length;
  activeTasks.textContent = tasks.filter((t) => !t.completed).length;
}

renderTasks();


let tasks = [];

window.onload = function () {
  renderTasks();
};

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Vui lòng nhập công việc!');
    return;
  }

  tasks.push(taskText);
  taskInput.value = '';
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${task}</span>
      <div>
        <button onclick="editTask(${index})">Sửa</button>
        <button onclick="deleteTask(${index})">Xóa</button>
      </div>
    `;
    taskList.appendChild(listItem);
  });
}

function deleteTask(index) {
  if (confirm('Bạn có chắc chắn muốn xóa công việc này không?')) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

function editTask(index) {
  const newTask = prompt('Chỉnh sửa công việc:', tasks[index]);
  if (newTask !== null && newTask.trim() !== '') {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}
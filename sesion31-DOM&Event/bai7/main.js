let todoList = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet George', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false }
];

function renderTodoList() {
    const ul = document.getElementById("myUL");
    ul.innerHTML = ""; 

    todoList.forEach(todo => {
        const li = document.createElement("li");
        li.innerHTML = `${todo.task} <span class="close" onclick="deleteTask(${todo.id})">X</span>`;
        if (todo.completed) {
            li.className = "checked";
        }
        ul.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("myInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Vui lòng nhập nội dung công việc!");
        return;
    }

    const isDuplicate = todoList.some(todo => todo.task.toLowerCase() === taskText.toLowerCase());
    if (isDuplicate) {
        alert("Công việc này đã tồn tại trong danh sách!");
        return;
    }

    const newId = todoList.length > 0 ? Math.max(...todoList.map(t => t.id)) + 1 : 1;
    
    todoList.push({
        id: newId,
        task: taskText,
        completed: false
    });

    input.value = ""; 
    renderTodoList(); 
}

function deleteTask(id) {
    todoList = todoList.filter(todo => todo.id !== id);
    renderTodoList();
}


document.querySelector(".addBtn").addEventListener("click", addTask);

document.getElementById("myInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    renderTodoList();
});
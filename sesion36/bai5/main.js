let toDo = JSON.parse(localStorage.getItem("listToDo")) || [];
function addNewData() {
    let taskName = document.getElementById("taskName").value.trim();
    if (taskName === "") {
        alert("Please enter a task name");
        return;
    }
    const newTask = {
        id: Date.now(), 
        name: taskName,
        status: "pending"
    };
    toDo.push(newTask);
    localStorage.setItem("listToDo", JSON.stringify(toDo));
    renderTasks();
    document.getElementById("taskName").value = ""; 
}

function renderTasks() {
    const pending = document.getElementById("pendingTasks");
    const inProgress = document.getElementById("inProgressTasks");
    const done = document.getElementById("doneTasks");

    pending.innerHTML = "";
    inProgress.innerHTML = "";
    done.innerHTML = "";

    toDo.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";
        taskDiv.innerHTML = `<p>${task.name}</p>
                             <button onclick="changeTaskStatus(${task.id}, '${getNextStatus(task.status)}')">Chuyển trạng thái</button>`;
        if (task.status === "pending") {
            pending.appendChild(taskDiv);
        } else if (task.status === "inProgress") {
            inProgress.appendChild(taskDiv);
        } else if (task.status === "done") {
            done.appendChild(taskDiv);
        }
    });
}

function changeTaskStatus(taskId, newStatus) {
    const task = toDo.find(t => t.id === taskId);
    if (task) {
        task.status = newStatus;
        localStorage.setItem("listToDo", JSON.stringify(toDo));
        renderTasks();
    }
}

function getNextStatus(currentStatus) {
    if (currentStatus === "pending") return "inProgress";
    if (currentStatus === "inProgress") return "done";
    return "done";
}

document.addEventListener("DOMContentLoaded", renderTasks);
renderTasks ();
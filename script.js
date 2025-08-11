function addTask() {
    let taskText = document.getElementById("taskText").value;
    let taskDate = document.getElementById("taskDate").value;

    if (taskText.trim() === "" || taskDate === "") {
        alert("Please enter both task and date/time!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText} <br><small>${taskDate}</small></span>
        <div class="task-actions">
            <button class="done-btn" onclick="markDone(this)">Done</button>
            <button class="reschedule-btn" onclick="rescheduleTask(this)">Reschedule</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskText").value = "";
    document.getElementById("taskDate").value = "";
}

function markDone(button) {
    let task = button.closest("li").querySelector("span");
    task.style.textDecoration = "line-through";
    task.style.color = "gray";
}

function rescheduleTask(button) {
    let newDate = prompt("Enter new date & time (YYYY-MM-DDTHH:MM):");
    if (newDate) {
        button.closest("li").querySelector("small").innerText = newDate;
    }
}

function deleteTask(button) {
    button.closest("li").remove();
}







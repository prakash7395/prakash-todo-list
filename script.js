function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let list = document.getElementById("taskList");

    let item = document.createElement("li");
    item.textContent = task;

    item.onclick = function() {
        item.style.textDecoration = "line-through";
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function(event) {
        event.stopPropagation();
        item.remove();
    };

    item.appendChild(deleteButton);
    list.appendChild(item);

    input.value = "";
}
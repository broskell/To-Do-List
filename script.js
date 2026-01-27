let todos = [
    { id: 1, task: "Morning walk" },
    { id: 2, task: "Attend classes" }
];

let list = document.getElementById("todoList");
let input = document.getElementById("todoInput");
let button = document.getElementById("addBtn");

function showTodos() {
    list.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        let li = document.createElement("li");
        li.className = "todo-item";

        li.innerHTML =
            "<span>" + todos[i].task + "</span>" +
            "<span class='todo-id'>ID: " + todos[i].id + "</span>";

        list.appendChild(li);
    }
}

button.onclick = function () {
    let text = input.value;

    if (text === "") {
        return;
    }

    let newTodo = {
        id: todos.length + 1,
        task: text
    };

    todos.push(newTodo);
    input.value = "";

    showTodos();
};

showTodos();

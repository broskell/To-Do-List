let todos = [`Morning Cardio`, `Go to College`]
let list = document.getElementById("todoList");
let input = document.getElementById("todoInput");
let button = document.getElementById("addBtn");

function showTodos() {
    addBtn.onclick = function() {
        let task = input.value;
        todos.push(task);
        showTodos();
    };

    list.innerHTML = todos.join(`<br>`);
}
showTodos();
let todos = [
    {
        id : 1,
        todo: 'Morning Cardio'
    },
    {
        id : 2,
        todo: 'Go to College'
    }
]
let list = document.getElementById("todoList");
let input = document.getElementById("todoInput");
let button = document.getElementById("addBtn");
let clear = document.getElementById("clearBtn");

function showTodos() {
    let html = '';
    for(let i = 0; i < todos.length; i++) {
        html += todos[i].id + '. ' + todos[i].todo + '<button class="delete-btn" onclick="deleteBtn(' + todos[i].id + ')"> Delete </button>' + '<br>';
    }
    list.innerHTML = html;
    input.value = '';
}

button.onclick = function() {
    let task = input.value;
    if (input.value === '') {
        return;
    }
    todos.push({
        id : todos.length + 1,
        todo: task
    });
    showTodos();
}

clear.onclick = function() {
    todos = [];
    showTodos();
}

function deleteBtn(id) {
    todos = todos.filter(function(item) { 
        return item.id != id 
    });
    showTodos();    
}

showTodos();
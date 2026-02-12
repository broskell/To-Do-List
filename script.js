let todos = [
    {id: 1, todo: `Morning Cardio`},
    {id: 2, todo: `Go to college`}
];

input = document.getElementById(`todoInput`);
todoList = document.getElementById(`todoList`);
addBtn = document.getElementById(`addBtn`);
clearBtn = document.getElementById(`clearBtn`);

function showTodo() {
    let html = ``;
    for (let i = 0; i < todos.length; i++) {
        html += `<div>
                    <span onclick="updateBtn(${todos[i].id})">${todos[i].id}. ${todos[i].todo}</span>
                    <button class="done-btn" onclick="doneBtn(${todos[i].id})">Done</button>
                    <br>
                </div>`
    }
    todoList.innerHTML = html;
}

addBtn.onclick = function() {
    newTodo = input.value;
    todos.push({id: todos.length + 1, todo: newTodo});

    input.value = '';
    showTodo();
}

clearBtn.onclick = function() {
    todos = [];
    showTodo();
}

function doneBtn(id) {
    todos = todos.filter(function(item){
        return item.id !== id;
    })
    showTodo();
}

function updateBtn(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].todo = prompt(`Enter a value`, todos[i].todo);
            if (todos[i].todo === null || todos[i].todo === "") {
                todos[i].todo = `Untitled`;
            }
        }
    }
    showTodo();
}

showTodo();
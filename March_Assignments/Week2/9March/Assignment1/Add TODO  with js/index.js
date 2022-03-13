
const todos = [];
const render = function () {
    const parent_container = document.getElementById('list-container');
    parent_container.innerHTML = '';
    for (let i = 0; i < todos.length; i += 1) {
        const new_li = document.createElement('li');
        new_li.innerText = todos[i];
        parent_container.appendChild(new_li);
        parent_container.style.color = '#13315c';
        parent_container.style.fontWeight = 'bold';
        new_li.style.marginTop = '5px';
        new_li.style.backgroundColor = '#fae0e4';
        new_li.style.padding = '4px';
    }
}
const add_item = function () {
    const ip = document.getElementById('todo-input');
    const new_todo = ip.value;
    todos.push(new_todo);
    ip.value = "";
    render();
}
const buttn = document.getElementById('add-btn');
buttn.addEventListener('click', add_item);
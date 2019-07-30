// Getting references
const search = document.querySelector('.search input')
const todoList = document.querySelector('.todos');
const newTodo = document.querySelector('.addNew');
const reset = document.querySelector("#reset")

// Creating a function to add new todo li
const inserter = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <img class="delete" src="delete.png">
          </li>
    `;

    todoList.innerHTML += html;
}


// Adding event 
newTodo.addEventListener('submit', e => {
    e.preventDefault();

    const todo = newTodo.add.value.trim();

    if (todo.length) {
        inserter(todo);
        newTodo.reset();
    }
});

// Deleting event
todoList.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// Searching event
const searchTodos = term => {
    // adding classes to unmatched todos 
    Array.from(todoList.children)
        .filter(todos => !todos.textContent.toLowerCase().includes(term))
        .forEach(todos => todos.classList.add('filtered'));

    // removing classes on delete    
    Array.from(todoList.children)
        .filter(todos => todos.textContent.toLowerCase().includes(term))
        .forEach(todos => todos.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
    let term = search.value.trim().toLowerCase();

    searchTodos(term);
});


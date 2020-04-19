//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(event) {
    //Prevents Form From Submitting
    event.preventDefault();
    //todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Creat LI
    const newTodo = document.createElement('li');
    newTodo.innerText = "Hey";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('Complete-btn');
    todoDiv.hasPointerCapture(completedButton);
    //CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('Complete-btn');
    todoDiv.hasPointerCapture(trashButton);
    //Append To List
    todoList.appendChild(todoDiv);
}
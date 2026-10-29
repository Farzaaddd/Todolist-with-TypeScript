const todoVal = document.querySelector(".todo-value") as HTMLInputElement;
const addTodo = document.querySelector(".add-todo") as HTMLButtonElement;
const clearTodo = document.querySelector(".clear-todos") as HTMLButtonElement;
const todoList = document.querySelector(".todoList") as HTMLUListElement;

// NOTE - Interface Todo
interface Todo {
    id: string,
    title: string,
    isComplete: boolean,
}

//NOTE - LocalStorage - Get
let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

//NOTE - call add todo button
addTodo.addEventListener("click", event => handleSubmit(event));

//NOTE - Submitting a todo
const handleSubmit = (event: Event) => {
    event.preventDefault();

    const newTodo: Todo = {
        id: crypto.randomUUID(),
        title: todoVal.value,
        isComplete: false
    }

    addTodoInDom(newTodo);
    todos.push(newTodo);
    saveTodosInLocalStorage();
    
    todoVal.value = "";
    todoVal.focus();

}

//NOTE - adding the todo to DOM
const addTodoInDom = (todo: Todo) => {
    todoList.insertAdjacentHTML("beforeend", `
        <li>
          ${todo.title}
          <span class="icon">
            <i class="fas fa-trash"></i>
          </span>
        </li>
    `);

    todoList.lastElementChild
        ?.querySelector(".icon")
        ?.addEventListener("click", () => removeTodo(todo.id));
};


//NOTE - LocalStorage - Save
const saveTodosInLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    return true;
}

//NOTE - LocalStorage - Remove Item
const removeTodo = (todoID: string) => {
    todos = todos.filter(todo => todo.id !== todoID);
    saveTodosInLocalStorage();
    todoList.innerHTML = "";
    todos.forEach((todo) => addTodoInDom(todo));
}

//NOTE - clear all todos
clearTodo.addEventListener("click", () => {
    todoList.innerHTML = "";
    todos = [];
    saveTodosInLocalStorage();
});

//NOTE - Loading saved storage
window.addEventListener("DOMContentLoaded", () => todos.forEach((todo) => addTodoInDom(todo)))
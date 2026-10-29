const todoVal = document.querySelector(".todo-value");
const addTodo = document.querySelector(".add-todo");
const clearTodo = document.querySelector(".clear-todos");
const todoList = document.querySelector(".todoList");
//NOTE - LocalStorage - Get
let todos = JSON.parse(localStorage.getItem("todos") || "[]");
//NOTE - call add todo button
addTodo.addEventListener("click", event => handleSubmit(event));
//NOTE - Submitting a todo
const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
        id: crypto.randomUUID(),
        title: todoVal.value,
        isComplete: false
    };
    addTodoInDom(newTodo);
    todos.push(newTodo);
    saveTodosInLocalStorage();
    todoVal.value = "";
    todoVal.focus();
};
//NOTE - adding the todo to DOM
const addTodoInDom = (todo) => {
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
};
//NOTE - LocalStorage - Remove Item
const removeTodo = (todoID) => {
    todos = todos.filter(todo => todo.id !== todoID);
    saveTodosInLocalStorage();
    todoList.innerHTML = "";
    todos.forEach((todo) => addTodoInDom(todo));
};
//NOTE - clear all todos
clearTodo.addEventListener("click", () => {
    todoList.innerHTML = "";
    todos = [];
    saveTodosInLocalStorage();
});
//NOTE - Loading saved storage
window.addEventListener("DOMContentLoaded", () => todos.forEach((todo) => addTodoInDom(todo)));
export {};
//# sourceMappingURL=todolist.js.map
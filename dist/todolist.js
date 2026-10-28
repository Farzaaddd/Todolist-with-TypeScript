const todoVal = document.querySelector(".todo-value");
const addTodo = document.querySelector(".add-todo");
const clearTodo = document.querySelector(".clear-todos");
const todoList = document.querySelector(".todoList");
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
    todoVal.value = "";
    todoVal.focus();
};
//NOTE - adding the todo to DOM
const addTodoInDom = (todo) => {
    todoList.insertAdjacentHTML("beforeend", `
        <li>
          ${todo.title}<span class="icon""
            ><i class="fas fa-trash"></i
          ></span>
        </li>    
    `);
};
export {};
//# sourceMappingURL=todolist.js.map
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

    todoVal.value = "";
    todoVal.focus();

}

//NOTE - adding the todo to DOM
const addTodoInDom = (todo: Todo) => {
    todoList.insertAdjacentHTML("beforeend", `
        <li>
          ${todo.title}<span class="icon""
            ><i class="fas fa-trash"></i
          ></span>
        </li>    
    `);
};
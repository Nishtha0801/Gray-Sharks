let form = document.querySelector("#todo-form");
let todoS = document.querySelector(".todos");
let input = document.querySelector("#todo-input");

form.addEventListener("submit", () => {
    let task = input.value;
    if(task === ''){
        return;
    }

    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoS.appendChild(todoDiv);

    let todoContent = document.createElement("div");
    todoContent.classList.add("todo-content");
    todoDiv.appendChild(todoContent);

    let todoInput = document.createElement("input");
    todoInput.classList.add("text");
    todoInput.type = "text";
    todoInput.value = task;

    todoContent.appendChild(todoInput);

    let todoActions = document.createElement("div");
    todoActions.classList.add("todo-actions");
    todoDiv.appendChild(todoActions);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    deleteButton.classList.add("delete");

    let editButton = document.createElement("button");
    editButton.innerHTML = "edit";
    editButton.classList.add("edit");

    todoActions.appendChild(deleteButton);
    todoActions.appendChild(editButton);

    


});
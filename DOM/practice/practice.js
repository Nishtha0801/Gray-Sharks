let btn = document.getElementById("clickMe");
console.log(btn);

let paragraph1 = document.getElementById("para1");
console.log(paragraph1);

let initialValue = paragraph1.textContent;

btn.addEventListener("click", () => {
    console.log("Button is clicked");
    paragraph1.innerHTML = `${initialValue} Goyal!`;
    btn.innerText = `Clicked!`;
});

let task2btn = document.getElementById("task2btn");

let tasklist = document.getElementsByClassName("item");
console.log(tasklist);

task2btn.addEventListener("click", () => {
    tasklist[2].innerHTML = `Item changed`;
});


let list = [];

let taskInput = document.getElementById("task-input");
console.log(taskInput);

let add = document.getElementById("addTask");
console.log(add);

let todoList = document.querySelector(".todoList");

add.addEventListener("click", () => {
    console.log("button clicked");
    list.push({
        text: taskInput.value,
    });
    
    let todo = document.createElement("li");
    todo.textContent = taskInput.value;
    todoList.appendChild(todo);

    taskInput.value = "";
    console.log(list);
    for(let i=0; i<list.length; i++){
        console.log(list[i].text);
    }
});

let div1 = document.querySelector(".div1");
console.log(div1);

let isSquare = true;

div1.addEventListener("click", ()=> {
    if(isSquare){
        div1.style.borderRadius = "50%";
        isSquare = false;
    } else {
        div1.style.borderRadius = "0%";
        isSquare = true;
    }
});

let fruits = ["apple", "mango", "banana"];

let fruitList = document.getElementById("fruitsList");

fruits.forEach((fruit) => {
    let itemEle = document.createElement("li");
    itemEle.textContent = fruit;
    fruitList.appendChild(itemEle);
});


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

add.addEventListener("click", () => {
    console.log("button clicked");
    list.push({
        text: taskInput.value,
    });
    taskInput.value = "";
    console.log(list);
    for(let i=0; i<list.length; i++){
        console.log(list[i].text);
    }
});

console.log(list);


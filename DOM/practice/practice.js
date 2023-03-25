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
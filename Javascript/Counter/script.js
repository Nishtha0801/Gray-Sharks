let counter = 0;

let counterValue = document.getElementById("counter-value");
let incrementBtn = document.getElementById("increment-btn");
let decrementBtn = document.querySelector("#decrement-btn");

let resetBtn = document.getElementById("reset");

incrementBtn.addEventListener("click", () => {
    counter++;
    counterValue.innerHTML = counter;
});

decrementBtn.addEventListener("click", () => {
    counter--;
    counterValue.innerHTML = counter;
});

resetBtn.addEventListener("click", ()=>{
    counter = 0;
    counterValue.innerHTML = counter;
});


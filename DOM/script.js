let input = document.getElementById("input-text");
console.log(input);


let submitBtn = document.querySelector(".submit");
console.log(submitBtn);


let list = [];

let msg = document.querySelector(".msg");

console.log(list);

submitBtn.addEventListener("click", (e) => {
    console.log("Button is clicked");
    if(input.value === ""){
        console.log("failure");
        msg.innerHTML="Task cannot be blank";
    } else {
        console.log("success");
        addTask();
        msg.innerHTML = "";
    }
    
});

let addTask = () => {
    list.push({
        text: input.value,
    });
    console.log(list);
}
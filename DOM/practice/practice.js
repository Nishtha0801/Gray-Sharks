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
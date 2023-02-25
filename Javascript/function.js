// function checkOddOrEven(num){
//     if(num % 2 === 0){
//         console.log("even number");
//     } else {
//         console.log("odd numver");
//     }
// }

// // checkOddOrEven(20);
// // checkOddOrEven(21);
// // checkOddOrEven(53);


// // function name(parameter1, parameter2,......){
// //     block of code
// // }

// function greeting(personName, personLast){
//     console.log(personName);
//     console.log("Hello everyone!" + personName + " " + personLast);
// }

// // greeting("Nithin", "Kumar");


// // Addition, a and b

// function add(a, b){
//     return (a+b);
// }

// console.log(add(20,25));
// add(10, 15);

// range 



// function hello() {   // === Function Declaration
//     alert("Hello");
// }

// hello();

// Function Expressions ======================================================

// Just a another syntax of creating a function
let hello = function() {
    console.log("hello, I am Nishtha");
};

hello();

// sum

// function sumOne(a,b){
//     return a+b;
// }

// let sum = function(a,b){
//     return a+b;
// };

// console.log(sum(3,5));

// let circleArea = function(rad){
//     return Math.PI*rad*rad;
// }

// console.log(circleArea(5));


// Arrow functions ===================== ES6

let multi = function(x,y){   // function expression
    return x*y;  
}

let helloArrow = () => console.log("Hello World");
let multiArrow = (x,y) => x*y; // arrow functions

let oddEven = (num) => {
    if(num % 2 === 0){
        console.log("even number");
    } else {
        console.log("odd number");
    }
};

oddEven(23);
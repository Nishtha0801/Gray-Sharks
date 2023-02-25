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

// let multi = function(x,y){   // function expression
//     return x*y;  
// }

// let helloArrow = () => console.log("Hello World");
// let multiArrow = (x,y) => x*y; // arrow functions

// let oddEven = (num) => {
//     if(num % 2 === 0){
//         console.log("even number");
//     } else {
//         console.log("odd number");
//     }
// };

// oddEven(23);


// // point 1
// let calcAverage = (scoreOne, scoreTwo, scoreThree) => {
//     let average = (scoreOne + scoreTwo + scoreThree)/3;
//     return average;
// };

// // point 2
// let dolphinAver = calcAverage(85,54,41);
// let koalaAver = calcAverage(23,34,27);

// console.log(dolphinAver);
// console.log(koalaAver);

// // point 3
// let checkWinner = (dolphinAver, koalaAver) => {
//     if(dolphinAver >= 2*koalaAver){
//         console.log("Dolphin is the winner")
//     } else if(koalaAver >= 2*dolphinAver){
//         console.log('koala is the winner');
//     } else {
//         console.log("Draw!")
//     }
// }

// checkWinner(dolphinAver,koalaAver);


// let greet = (nameOfThePerson) => console.log(`Hello, ${nameOfThePerson}`);

// arrow function
let counterFunc = (counter) => {
    if(counter > 100){
        counter = 0;
    } else {
        counter ++;
    }
    return counter;
}

// function expression
let counterFuncExpression = function (counter) {
    if(counter > 100){
        counter = 0;
    } else {
        counter ++;
    }
    return counter;
}

let isEven = (num) => (num%2 === 0);

console.log(isEven(23));


let greet = (firstName, lastName) => console.log(`Hello, ${firstName} ${lastName}`);

greet("Nishtha", "Goyal");


let kgTolbs = (kg) => {
    let lbs = kg*2.2;

    if(lbs > 150){
        console.log("Obese");
    } else if (lbs >= 100 && lbs <= 150){
        console.log("Okay condition")
    } else {
        console.log("You are underweight");
    }
}

kgTolbs(59);





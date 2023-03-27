//////// var ==================================================

// console.log(counter); // undefined
// var counter = 1;
// console.log(counter);


//////// let ===================================================
// console.log(counter); //error
// let counter = 1;
// console.log(counter);

// function hoisting

// let numberOne = 5;
// let numberTwo = 6;

// let ans = add(numberOne, numberTwo);
// console.log(ans);

// //normal
// function add(a,b){
//     return a+b;
// }


// function expression
// let numberOne = 5;
// let numberTwo = 6;

// let ans = add(numberOne, numberTwo);
// console.log(ans);

// let add = function(a,b){
//     return a+b;
// }

// arrow functions

let numberOne = 5;
let numberTwo = 6;

let ans = add(numberOne, numberTwo);
console.log(ans);

let add = (a,b) => a+b;


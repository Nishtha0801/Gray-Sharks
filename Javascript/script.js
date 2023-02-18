// // let variableName = 'value';
// let nithin = 'amazing';
// // nithin => variableName
// // = -> assignment

// var countOne = 40;
// console.log(countOne);

// var countTwo = 80; //number 
// console.log(countTwo);

// var totalCount = countOne + countTwo;
// console.log(totalCount)

// let a = 4;
// // let eioewihibvureburobvuorruo = 5;

// let hello = "Hello I am Nishtha12334445 ^7***, 456898765"; //string

// let hello_world = "hello world!";

// let helloWorldEveryone = "Hello World, Everyone!";

// // let myVariable = false; //boolean => true and false

// // let hello world = "Not possible";

// let myVariable;
// console.log(typeof myVariable); // => undefined

// let myNullVariable = null;
// console.log(typeof myNullVariable); // => object

// // key:value

// let myObject = {
//     firstName : "Nishtha",
//     lastName : "Goyal",
//     age:"21",
// }

// // property  value  firstName   Nishtha

// console.log(myObject.firstName);

// const ============================================

// const myConstantVariable = "Hey, I am a constant variable ki value";
// console.log(myConstantVariable);

//  myConstantVariable = "Hey, I am changed";  => error
// const cannot be updated, const cannot be redeclared.

// let, var, const => we can use these keywords to declare a variable.

//var========================================================

// var myName = "Nishtha";

// // function newFunction(){
// //     var myLastName = "goyal";
// //     console.log(myLastName);
// // }

// // console.log(myName);

// // newFunction();

// // var -> globally and locally/function scoped
// // var variable can be redeclared and updated.

// var myName = "Nishtha Goyal";
// console.log(myName);

// myName = "Nishtha Pankaj Goyal"
// console.log(myName);

// let ==========================================

// let is more prferred for variable declaration
// let is block scoped {}
// A block is a piece of code bounded by {}.
// Anything within these curly braces is a block.

// let myCount = 4;

// if(myCount > 3){
//     let say = "Say hello!";
//     console.log(say);
// }

// console.log(myCount);

// let can be updated but it can't be redeclared

// let myName = "Nishtha";

// console.log(myName);

// myName = "Nishtha Goyal";
// console.log(myName);


// Operators:

// let a = 7;
// a+=5; // a = a+5
// console.log(a); // => 12

// a-=2; // a = a-2;
// console.log(a); // => 10

// a*=4;
// console.log(a); // => 40

// a/=4;
// console.log(a); // => 10

// a**=2;
// console.log(a); // => 100

// a%=3; 
// console.log(a); // => 1

// // x+y, x*y
// a++; // => 2
// a--; // => 1




// var l = 3;
// const m = 2; 
// const l=3;
// const m =2;

// console.log(l == m); //Equalto, return a true if operands are equal

// console.log(l != m); 3 != 2 => true

// === , strict equalTo

// console.log(l === m);

// && -> Logical And

const x=5, y=2;
// console.log((x < 6) || (y > 4));  

// !

// console.log(!true);

// if(x>y){
//      console.log("x is greater");
// }

// else {
//     console.log("y is greater");
// }


// //team 1
// let dol = {
//     s1 : 96,
//     s2 : 108,
//     s3 : 89,
// }

// //team 2
// let koa = {
//     s1 : 88,
//     s2 : 91,
//     s3 : 110,
// }

// // point 1
// let dAverage = (dol.s1 + dol.s2 + dol.s3)/3;
// let kAverage = (koa.s1 + koa.s2 + koa.s3)/3;

// //point 2
// if(dAverage > kAverage){
//     console.log("D is the winner");
// } else if(kAverage > dAverage){
//     console.log("K is the winner");
// } else {
//     console.log("Draw");
// }


// point 3
// D ko jeetana h
// if(dAverage > kAverage && dAverage >= 100){
//     console.log("D is the winner");
// } else if (kAverage > dAverage && kAverage >= 100){
//     console.log("K is the winner");
// } else {
//     // point 4
//    if(dAverage === kAverage && dAverage>=100 && kAverage>=100){
//     console.log("Draw");
//    } else {
//     console.log("No one wins the trophy");
//    }
// }


// let country1 = {
//     countryName: "India",
//     population: 5000000,
//     isIsland: false,
//     language: "English", 
// }


// let country2 = {
//     countryName: "Finland",
//     population: 89877,
//     isIsland: true,
//     language: "English", 
// }

// if(country1.population >= 5000000 && country1.language === "English" && !country1.isIsland){
//     console.log("Perfect country = country1" + country1.countryName);
// }


// Question 1========================================
let a = 15;
let b = 15, c = 11;   

if(a > b && a > c){
    console.log("a is greater");
} else if(b > a && b > c){
    console.log("b is greater");
} else if(c > a && c > b){
    console.log("c is greater");
} else {
    // homework!
}

// Question 2 ======================================

let range = {
    highest: 1000,
    lowest: 900,   //900 - 1000
}

let number = 910;

if(number >= range.lowest && number <= range.highest){
    console.log("Number lying in range!");
} else {
    console.log("Not in range");
}

// Question 3 ===========================================

let numberTocheck = 10;

if(numberTocheck % 2 === 0){
    console.log("even number");
} else {
    console.log("odd numver");
}

// Ternary Operator/ Conditional Operator

numberTocheck % 2 === 0 ? console.log("my number is even") : console.log("my number is odd");
// condition ? "Do something, if your condition is satisfied" : otherwise, do this

(number >= range.lowest) && (number <= range.highest) ? console.log("My number is in range") : console.log("My number is out of range");



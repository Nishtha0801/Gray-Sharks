// // array of strings
// const words = ["hello", "I", "Am", "Nishtha"];
// console.log(typeof words);

// // empty array
// const myEmptyArray = [];
// console.log(myEmptyArray);

// // array of numbers
// const numbers = [3,4,5,6,7,7,8,9];
// console.log(numbers);

// // array with mixed datatypes
// // array is treated like an object in js.
// const arrayMixedData = ["hey", 23, false]; //
// console.log(arrayMixedData);

// const data = [
//     {'myName' : 'Nishtha'},
//     [1,2,3,4], 
//     function helloWorld(word){
//         console.log("hello world" + word);
//         return 2;
//     } 
// ];

// console.log(data);
// console.log(data[2]("Nishtha"));

           //   0 1 2 ..........
// const myArray = [1,2,3,4,5,6,'hello', 'I', 'am', 'Nishtha', true];

// console.log(myArray[0]);
// console.log(myArray[10]);
// console.log(myArray[7]);
// console.log(myArray[11]);

let words = ['hello', 'I', 'am'];

words.push('Nishtha'); // it got added at the last.

console.log(words);

words.unshift('Good Morning'); // got added at the front.
console.log(words);

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

// let words = ['hello', 'I', 'am'];

// words.push('Nishtha'); // it got added at the last.

// console.log(words);

// words.unshift('Good Morning'); // got added at the front.
// console.log(words);

// words[0] = 'hi';
// console.log(words);

// let data = ["hi",1,3,4,7,9,"hello"];
// let remove = data.pop(); // it will basically remove the data from last
// // console.log(remove);
// // console.log(data);

// // let remove = data.shift(); // it will remove the first element
// // console.log(remove);
// // console.log(data); 
// console.log(data.length);

// const arrayOne = [1,2,3,4];
// const arrayTwo = [5,6,7,8];
// const arrayThree = [9,10,11];

// let concatenatedArray = arrayOne.concat(arrayTwo,arrayThree);

// console.log(concatenatedArray);

// let billValue = 275;
// let tip = 50 <= billValue <= 300 ? billValue*(15/100) : billValue*(20/100);
// console.log(billValue, tip);
// console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value was ${billValue + tip}`);




let bills = [125, 555, 44];
let tips = [];
let total = [];

let calcTip = (billValue, tips) => {
    let tip = 50 <= billValue <= 300 ? billValue*(15/100) : billValue*(20/100);
    tips.push(tip);
    total.push(billValue+tip);
    return tips;
}
calcTip(125, tips);
calcTip(555, tips);
console.log(tips);
console.log(total);
// functions are first-class citizens

// function mToCm(unit){
//     return unit*100;
// }

// function kgToG(unit){
//     return unit*1000;
// }


// function convert(fn, unit){
//     return fn(unit);
// }

// let grams = convert(kgToG, 2);
// let cm = convert(mToCm, 4);


// callback function
// filter -> odd no filter out hojaye

// function isOdd(number){
//     return number % 2 != 0;
// }

// function filter(arr, fn){
//     let ans = [];
//     for(let i=0;i < arr.length; i++){
//         if(fn(arr[i])){
//             ans.push(arr[i]);
//         }
//     }
//     return ans;
// }

// let arr = [1,3,5,6,8,10,12,14,16,7,9];
// console.log(filter(arr, isOdd));

//anonymous functions

function filter(arr, callback){
    let ans = [];
    for(let i=0;i < arr.length; i++){
        if(callback(arr[i])){
            ans.push(arr[i]);
        }
    }
    return ans;
}
 let arr = [1,3,5,6,8,10,12,14,16,7,9];

 let oddNumbers = filter(arr, function(number){
    return number%2 != 0;
 });

 console.log(oddNumbers);


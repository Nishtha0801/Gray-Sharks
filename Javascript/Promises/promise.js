// syntax ======================
// const myPromise = new Promise((resolve, reject) => {
//     // jo bhi tumhe krna h => asynchronous operation

//     if(success){
//         resolve(value);
//     } else {
//         reject(error);
//     }
// });
// let success = false;


// let getData = () => {
//     // db call to get the data of the user from databse => asynchronous operation
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(success){
//                 resolve([
//                     {fname:'nishtha', age: 21},
//                     {fname:'john', age: 22},
//                 ]);
//             } else {
//                 reject('Failed to get the data');
//             }    
//         }, 1000);
//     });
// }

// function onFulfilled(data){
//     console.log(data);
// }

// function onRejection(error){
//     console.log(error);
// }

// let promise = getData();
// console.log(promise);
// promise.then(onFulfilled, onRejection);

let func = () => {
    console.log("You have to call me, whether your promise is resolved or rejected");
}

function add(a,b){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a === undefined || b === undefined){
                reject('Please give all the required parameters')
            } else {
                resolve(a+b);
            }
        }, 1000);
    });
}


let promise = add(5,7);
promise.then(value => console.log(value))
.catch((error) => console.log(error))
.finally(() => {
    func();
});


// promise.catch(onRejected);

// promise.catch((error) => {
//     console.log(error);
// })



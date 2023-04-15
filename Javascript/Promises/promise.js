// syntax ======================
// const myPromise = new Promise((resolve, reject) => {
//     // jo bhi tumhe krna h => asynchronous operation

//     if(success){
//         resolve(value);
//     } else {
//         reject(error);
//     }
// });

let getData = () => {
    // db call to get the data of the user from databse => asynchronous operation
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {fname:'nishtha', age: 21},
                {fname:'john', age: 22},
            ])
        }, 1000);
    });
}

function display(data){
    console.log(data);
}

let promise = getData();
console.log(promise);
promise.then(data => display(data));
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

// .finally() ===============================================

// let func = () => {
//     console.log("You have to call me, whether your promise is resolved or rejected");
// }

// function add(a,b){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(a === undefined || b === undefined){
//                 reject('Please give all the required parameters')
//             } else {
//                 resolve(a+b);
//             }
//         }, 1000);
//     });
// }


// let promise = add(5,7);
// promise.then(value => console.log(value))
// .catch((error) => console.log(error))
// .finally(() => {
//     func();
// });


// promise.catch(onRejected);

// promise.catch((error) => {
//     console.log(error);
// })


// Promise.all() ===========================================
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(3);
//     }, 3000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(4);
//     }, 2000);
// });


// function onRejected(){
//     console.log("My Promise.all has been failed")
// }
// Promise.all([promise1, promise2]).then((res) => {
//     console.log(res);
//     console.log(res[0]);
//     console.log(res[1]);
// }).catch(onRejected);


// Promise.resolve , Promise.reject =================

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(6);
//     }, 3000);
// });

// promise.then(res => {
//     return res === 3 ? Promise.resolve('I am 3') : Promise.reject('I am rejected')
// }).then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// });


// Promise.race ========================================
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(3);
//     }, 3000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(4);
//     }, 2000);
// });


// function onRejected(){
//     console.log("My Promise.all has been failed")
// }
// Promise.race([promise1, promise2]).then((res) => {
//     console.log(res);
// }).catch(onRejected);

// Promise.allSettled()====================================================

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(3);
//     }, 3000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(4);
//     }, 2000);
// });


// function onRejected(){
//     console.log("My Promise.all has been failed")
// }

// function onFulfilled(){
//     console.log("Fullfilled all the promises");
// }

// Promise.allSettled([promise1, promise2]).then((res) => {
//     console.log(res);
// }).then(onFulfilled);


// Promise Chaining ===============================================
const cart = ['shoes', 'pants', 'shirts', 'whtever'];

createOrder(cart)
.then(function(orderID){
    console.log(orderID);
    return orderID;
}).catch(function (err){
    console.log(err.message);
}).then(function(orderID){
    return proceedToPayment(orderID);
}).then(function(paymentInfo){
    console.log(paymentInfo);
}).catch(function(err){
    console.log(err.message);
}).then(function(orderId){
    console.log("I am going to be invoked for sure");
});

// explicit error handling


// async/await
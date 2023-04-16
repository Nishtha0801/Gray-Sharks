// shallow copy
// const person1 = {
//     name: "Nishtha",
//     age: 21,
// }

// let person2 = person1;

// person2.age = 25;

// console.log(person1.age);
// console.log(person2.age);

// Deep copy ============================
// const person1 = {
//     name: "Nishtha",
//     age: 21,
// }

// let person2 = {...person1}; 

// person2.age = 25;

// console.log(person1.age);
// console.log(person2.age);

// let person1 = {
//     name: "Nishtha",
//     age: 21,
//     address: {
//         city: "Bhiwani",
//         state: "Haryana"
//     }
// }

// let person2 = {...person1};

// person2.age = 25;
// person2.address.city = "Hisar";

// console.log(person1.age);
// console.log(person2.age);

// console.log(person1.address.city);
// console.log(person2.address.city);

/// Deep copy (in case of nesting as well) ===========================

// JSON.stringify()

let person1 = {
    name: "Nishtha",
    age: 21,
    address: {
        city: "Bhiwani",
        state: "Haryana"
    }
}

let person2 = JSON.parse(JSON.stringify(person1));

person2.age = 25;
person2.address.city = "Hisar";

console.log(person1.age);
console.log(person2.age);

console.log(person1.address.city);
console.log(person2.address.city);


// Array.concat, Array.from(), Object.assign() => shallow copy
// ... => deep copy when there is no nesting
// JSON.parse(JSON.stringify(person1))
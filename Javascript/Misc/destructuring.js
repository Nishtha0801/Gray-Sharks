let person = {
    fName: 'Nishtha',
    lName: 'Goyal'
}

// object destructuring

// let firstName = person.fName;



let {firstName: fname, lastName: lname} = person;
console.log(firstName);

// Array destructuring
let [first, second, third] = ['Nishtha', 'Goyal', 'dysuvfuyw'];
console.log(first);


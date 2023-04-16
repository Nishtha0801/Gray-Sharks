let person = {
    fName: 'Nishtha',
    lName: 'Goyal'
}

// object destructuring

// let firstName = person.fName;



let {fName: firstName, lname:lastName} = person;
console.log(firstName);

// Array destructuring
let [first, , third] = ['Nishtha', 'Goyal', 'dysuvfuyw'];
console.log(first);


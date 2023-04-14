let person1 = {
    fname: 'Nishtha',
    age: 21,
    greet: function(){
        console.log("Heyy" + "I am" + this.fname + " " + this.age + "years old")
    },
}

let person2 = {
    fname: 'Ankit',
    age: 21,
}

let newFunction = person1.greet.bind(person2);

newFunction();



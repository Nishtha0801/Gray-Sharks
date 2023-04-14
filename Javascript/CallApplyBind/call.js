let person1 = {
    fname: 'Nishtha',
    age: 21,
}

let person2 = {
    fname: 'Ankit',
    age: 21,
}


let showDetails = function(city, car){
    console.log(this.fname + "is" + this.age + "years old" + city + car);
}

showDetails.call(person1, "Bhiwani", "BMW");
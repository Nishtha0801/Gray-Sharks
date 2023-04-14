function hello(){
    console.log("hey I am hello");
}

hello();

(function greet(fname){
    console.log("Heyy, I am an IIFE" + " " + fname);
})("nishtha");


let sum = (function sum(a,b){
    return a+b;
})(10, 11);

console.log(sum);

let help = () => {

};


(() => {
    console.log("Hello, I am IIFe, arrow function");
})();
//Faulty Calculator


let prompt = require('prompt-sync')();
let random = Math.random();
console.log(random)


let a = prompt("Enter your first number: ")
let b = prompt("Enter your second number: ")
let c = prompt("Enter operation: ")

let obj = {
        "+": "-",
        "-": "/",
        "*": "+",
        "/": "**"
}

// let result = `a`, `b`, `c``;


if (random>0.1){
        
        console.log(a,c,b);
        
        

}

else {
        c = obj[c],
        console.log(a,c,b);        


}



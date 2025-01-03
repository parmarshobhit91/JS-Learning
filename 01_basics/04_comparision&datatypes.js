// console.log("2" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// ===
// console.log("2" === 2);

// ****************** Data Types **********************

// Primitive (call by value)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BitInt

// Non-Primitive (call by reference)
// Array, Objects, Functions

const id = Symbol('123')
const anotherID = Symbol('123')

// console.log(id == anotherID);


const heros = ["shobhit", "hanu", "dumroo"]

let myObj = {
    name: "shobhit",
    age: 22,
}

const myFunction = function() {
    console.log("Hello world");
    
}


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shobhit@google.com"

console.log(userOne.email);
console.log(userTwo.email);

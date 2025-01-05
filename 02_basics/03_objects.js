// singleton
// Object.create

// object literals
const mySymbol = Symbol("key1")

const user = {
    name: "Shobhit",
    "full name": "Shobhit Parmar",
    [mySymbol]: "mykey1",
    age: 21,
    location: "Indore",
    email: "shobhit@parmar.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(user.name);
// console.log(user.full name); not possible
console.log(user["name"]);
console.log(user["full name"]);
console.log(user[mySymbol]);

user.name = "dumroo"
console.log(user.name);

// Object.freeze(user) // ab kuchh bhi change nahi hoga
user.name = "didi"
console.log(user.name);

console.log(user)


user.greetings = function() {
    console.log("hello js user");
    
}

user.greetings2 = function() {
    console.log(`Hello js user, ${this.name}`);
   // console.log(`Hello js user, ${name}`);
    
}

console.log(user.greetings) // undefined
console.log(user.greetings()) 
console.log(user.greetings2()) 
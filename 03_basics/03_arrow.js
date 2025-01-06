const user = {
    username: "shobhit",
    price: 999, 

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "dumroo"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "shobhit"
//     console.log(this.username);
    
// }

// chai()

// const chai = () => {
//     let username = 'shobhit'
//     console.log(this.username)
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  ( num1 + num2 )

// const addTwo = (num1, num2) =>  ({username: "shobhit"})
console.log(addTwo(2,3));

// function addTwoNumbers(number1, number2) {
//     console.log(number1+number2);
// }

// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2
//     return result
// }

function addTwoNumbers(number1, number2) {
    return  number1 + number2
}
const result = addTwoNumbers(2,3)

// console.log("Result: ", result);

function loginUserMessage(username) {
    // if(username === undefined) {
    //     console.log("Please enter a username!")
    //     return
    // }
    // Another way to write the above if statement
    if(!username) {
        console.log("Please enter a username!")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("shobhit"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 5999));

const user = {
    username: "shobhit",
    price: 999
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "dumroo",
    price: 0
})

const myNewArray = [200, 400, 500, 7800]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 5700]));

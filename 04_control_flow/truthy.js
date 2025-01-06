// const userEmail = "shobhit@parmar.com"
// const userEmail = ""

// falsy values 
    // false
    // 0
    // -0
    // BigInt 0n
    // ""
    // null
    // undefined
    // NaN


// truthy values
    // true
    // 1
    // "0"
    // 'false'
    // " "
    // []
    // {}
    // function(){}

// if(userEmail.length === 0) {
//     console.log(`array is empty`);
    
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0) {
//     console.log(`object is empty`);
    
// }
    
// if(userEmail) {
//     console.log(`Got user email : ${userEmail}`);
// } else {
//     console.log(`User email not found!`)
// }

// Nullish Coalescing Operator (??) : null defined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1);

// Terniary Operator

// condition ? true : false 

const iceTeaPrice =  100
iceTeaPrice <= 80 ? console.log(`Less than 80`) : console.log(`More than 80`)
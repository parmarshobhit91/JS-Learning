// array

const myArr = [0, 1, 2, 3, 4, 5, true, "shobhit"] 
const myArr2 = [0, 1, 2, 3, 4, 5]
const myArr3 = new Array(0, 1, 3, 4, 5, 6)

// console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// myArr.shift()
// myArr.shift()
// myArr.shift()
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("a ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("b ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c", myArr);
console.log(myn2);
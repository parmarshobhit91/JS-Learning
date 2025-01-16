// for of loop
 
// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,2,3,4,5]
// for(const val of arr) {
//     console.log(`Values are ${val}`)
// }

// const greetings = "Hello world!"
// for(const greet of greetings) {
//     console.log(greet)
// }

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('FR', "France")
map.set('FR', "France")

// console.log(map);


for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}
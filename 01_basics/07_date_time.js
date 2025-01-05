let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// let myCreatedDate = new Date(2000, 0, 23)
// let myCreatedDate = new Date(2000, 0, 23, 5, 3)
// let myCreatedDate = new Date("01-14-2000")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// console.log(`Todays date is ${newDate.getDate()} and time is ${newDate.toLocaleTimeString()}`);

console.log(newDate.toLocaleString('default', {
    weekday: "short",
}))

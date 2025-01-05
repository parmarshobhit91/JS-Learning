// singleton
// const tinderUser = {}  // non singleton object
const tinderUser = new Object()  // singleton object

tinderUser.id = "123abc"
tinderUser.name = "didi"
tinderUser.idLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "didi@gmail.com",
    fullname: {
        username: {
            firstname: "didi",
            lastname: "parmar"
        }
    }
}

console.log(regularUser.fullname.username.firstname);
// console.log(regularUser.fullname?.username.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj4 = {
    5: "a",
    6: "b"
}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 2, 
        email: "2@gmail.com"
    }
]
console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));
console.log(tinderUser.hasOwnProperty('IsLoggedIn'));
console.log(tinderUser.hasOwnProperty('isMarried'));


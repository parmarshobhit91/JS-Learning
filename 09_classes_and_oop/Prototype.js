let myName = "shobhit"
// console.log(myName.truelength)

let myHeros = ["dumroo", "didi"]

let heroPower = {
    dumroo: "hammer",
    didi: "sling",

    getDidiPower: function(){
        // console.log(`Didi's power is ${this.didi}`)
    }
}

Object.prototype.hitesh = function(){
    // console.log(`hitesh is present in all objects`)
}

Array.prototype.heyHitesh = function(){
    // console.log(`Hitesh says hello`)
}

myHeros.hitesh()
// heroPower.heyHitesh()
myHeros.heyHitesh()

// inheritance

const User = {
    name: "chai",
    username: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurDidi         "
String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is : ${this.trim().length}`)
}
anotherUsername.truelength()

"dumroo".truelength()
"didi".truelength()
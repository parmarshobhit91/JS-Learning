class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const shobhit = new User("shobhit")
// console.log(shobhit.createId())

class Teacher extends User {
    constructor(email,username) {
        super(username)
        this.email = email
    }
}

const didi = new Teacher("didji", "didi.com")
console.log(didi.createId())
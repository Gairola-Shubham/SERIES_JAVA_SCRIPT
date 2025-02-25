class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const shubh = new User("shubh")
//console.log(shubh.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
        
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
//console.log(iphone.createId());
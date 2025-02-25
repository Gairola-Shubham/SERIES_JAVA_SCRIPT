class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        return this._email = value
    }

    get password(){
        return `${this._password}subh`
    }

    set password(value){
        this._password = value
    }
}

const shubh = new User("shubh@gmail.com", "abc")
console.log(shubh.email);

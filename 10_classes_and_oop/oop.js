// object literal
const user = {
    username: "shubh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details");
        //console.log(`Username: ${this.username}`);
        //console.log(this);
        
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);


//Constructor ( new keyword is constructor function)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

this.greeting = function(){
    console.log(`Welcome ${this.username}`);
    
}

    //return this;
}

const userOne = new User("shubh", 12, true)
const userTwo = new User("gairo", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);


// new keyword make a empty object ( said as instance)
// step 1 : new object is created 
// step 2 : constructor function is called due to new keyword
// step 3 : function got inject in new ketword
// step 4 : we get the output of the function
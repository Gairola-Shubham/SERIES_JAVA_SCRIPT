// singleton
//object.create


// object literals

const mySym = Symbol("key1")


const jsUser = {
    name : "shubh",
    "full name": "shubh gairo",
    [mySym]: "mykey1", // acting like key
    age : 18,
    location : "jaipur",
    email : "shubh@google.com",
    LastLogIn: false,
    LastLoginDays : ["Monday", "Saturday"]

}

//console.log(jsUser.email)
//console.log(jsUser["email"])
//console.log(jsUser["full name"])
//console.log(jsUser[mySym])
//console.log(typeof jsUser[mySym])

jsUser.email = "bleh@gmail.com" //over writing values
//Object.freeze(jsUser) // frezzing the value can't convert it further
jsUser.email = "bro@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


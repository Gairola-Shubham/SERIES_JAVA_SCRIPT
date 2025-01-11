// primitive
/* 7 types :String, Number, boolean, null, undefined, Symbol,
BigInt */

// js is dynamically typed

const score = 100
const value= 1000.23

const islogged = false;
const temp = null
let useremail;

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id==id2)

const bignumber = 1365354651611316n

// Refrence (NON primitive)
// Array, Object, Function

const heros = ["shakti", "nagraj", "doga"]
let myObj = {
    name:"shubh",
    age: 22,
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof scorevalue);
console.log(typeof myFunction);
console.log(typeof id2);

 
// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "shubhblehbleh"

let anothername = myYoutubename
anothername = "chai cahi"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "shubh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
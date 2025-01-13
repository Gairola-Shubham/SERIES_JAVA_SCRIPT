const user = {
    username : "shubh",
    price: 399,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`)  //(this function) refer current constext
        //console.log(this)
    }
}

//user.welcomemessage()
//user.username = "sam"
//user.welcomemessage()

//console.log(this);

//function chai(){
//    let username= "shubh"
//    console.log(this.username);
//}

//chai()

//const chai = function(){
//    let username= "shubh"
//    console.log(this.username);

//}

//chai()


const chai = () => {
    let username= "shubh"
    console.log(this);

}

//chai()

//const addtwo = (num1, num2) => {   explicit return
//    return num1 + num2
//}

//const addtwo = (num1, num2) =>  num1 + num2  implicit return


//const addtwo = (num1, num2) =>  (num1 + num2)


const addtwo = (num1, num2) =>  ({username: "shubh"})

console.log(addtwo(3,4))

//const myArray = [2, 3 , 5, 6 ]
//myArray.forEach()

//{} ye use hua to return likhna hota
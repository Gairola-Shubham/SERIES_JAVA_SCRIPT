
function namemy(){
console.log("S");
console.log("h");
console.log("u");
console.log("b");
console.log("h");
}

//namemy()

//function addtwonumbers(number1, number2 ){  // function ke andar parameters baki arguments
//    console.log(number1 + number2);
//}
function addtwonumbers(number1, number2 ){ 
    //let result = number1 + number2
    //return result
    return number1 + number2 
}

const result = addtwonumbers(3, 5) 
//console.log ("Result: ", result);

function loginuser(username ="sam"){
    if(username === undefined){ //!username
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}

//console.log(loginuser("shubh"))
//console.log(loginuser("shubh"))

function calculateprice(val1, val2, val3, ...num1){  // now rest operator(...)
    return num1
}

//console.log(calculateprice(200, 400, 500, 2000))

const user = {
    username: "shubh",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleobject(user)

handleobject({
    username: "sam",
    price: 399
})

const myArray = [200, 300, 400, 500]

function returnsecondvalue(getArray){
    return getArray[1]
}

//console.log(returnsecondvalue(myArray));
console.log(returnsecondvalue([200, 300, 400, 500]));
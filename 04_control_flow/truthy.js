const userEmail = []   // when we assume that string is true 

if(userEmail){
    console.log("got user email");
    
}
else{
    console.log("dont have user email");
    
}

// falsy value
//false, 0, -0, BigInt 0n, "", null, undefined, Nan 

//truthy values
// "0", 'false', " ", [], {}, function()

//if (userEmail.length === 0)
//    {
// console.log("array is empty");
//}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0 ){
    console.log("object is enpty");
}



//Nullish Coalesing Operator (??): null, undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary operator

//condition ? true : false

const iceteaPrice = 100
iceteaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");



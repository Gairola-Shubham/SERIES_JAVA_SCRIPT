// if 
//const isuserloggedin = true
//const temperature = 41

//if (temperature<50){
//    console.log("less then 50")
//}
//else{
//console.log("tempeature is greater then 50")
//}

//console.log("executed")
//<, >, <=, >=, ==, !=, ===, !==


//const score = 200

//if(score>100){
//    let power = "fly"    // var = completely global
//    console.log(`user power: ${power}`);
//}

//console.log(`user power: ${power}`);


//const balance = 1000

//(ese nahi karna) if(balance > 500) console.log("test"), console.log("test2");   // implicit scope 

//if (balance < 500){
//    console.log("less then 500");
//}
//else if(balance < 750) {
//    console.log("less then 750");
//}
//else if(balance < 900){
//    console.log("less then 900");
//}
//else{
//    console.log("less then 1200");
//}

const userLoggedin = true
const debitCard = true
const loggedInGoogle = false
const loggedInEmail = true

if(userLoggedin && debitCard && 2==3){
    console.log("allow to buy course");
}

if(loggedInGoogle || loggedInEmail){
    console.log("user logged in");
    
}


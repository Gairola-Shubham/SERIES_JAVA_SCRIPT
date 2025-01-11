// ({}) it is scope
//var c = 300
let a =300
if (true){
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    //c = 30
}


console.log(a);
//console.log(b);
//console.log(c);

// block scope ( curly bracket ke andar jo hota hai )
// global scope ( curly bracket ke jo bhar hota hai )
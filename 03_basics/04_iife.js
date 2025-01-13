// immediately invoked function expressions (IIFE)

(function bro(){
    //named IIFE
    console.log(`DB connected`);
}) ();                             

( (name) => {            // error isliye aya kyuki iife to pata ni code kab end karna 
    console.log(`two ${name}`)
}) (`shubh`)




// to clear the pollution of global scope 
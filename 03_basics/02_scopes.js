// ({}) it is scope
//var c = 300
let a =300
if (true){
    let a = 10
    const b = 20
    //console.log("INNER: ", a);
    //c = 30
}


//console.log(a);
//console.log(b);
//console.log(c);

// block scope ( curly bracket ke andar jo hota hai )
// global scope ( curly bracket ke jo bhar hota hai )

// # nested scope

function one(){
    const username = "shubh"

    function two(){
        const website = "youtube"
       // console.log(username);

    }
    //console.log(website)

    two()
}

//one()

if (true){
    const username = "shubh"
    if(username === "shubh"){
        const website = "youtube"
        //console.log(username + website)
    }
    //console.log(website);
}
//console.log(username)





// +++++++++++++++++++++++intresting +++++++++++++++
console.log(addone(5))
function addone(num){    // basic function
    return num + 1
}


// agar yha pe console.log(addtwo(5)) hota to error ata 
const addtwo = function(num){   // function but also called as expression
    return num + 2
}

console.log(addtwo(5))


//hoisting 
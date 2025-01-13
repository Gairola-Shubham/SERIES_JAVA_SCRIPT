//Global Execution context
//Function execution context
//eval execution context

//1st phase : memory creation phase
//2nd phase : execution phase

let val1 = 10
let val2 = 5
function addnum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1, val2)
let result2 = addnum(10, 2)

// 1 global execution (this)

/* 2 Memory phase 
     val1 - undefined (line 8)
     val2 - undefined (line 9)
     addnum - defination (line 10)
     result1 - undefined (line 14)
     result2 - undefined (lin 15)
*/

/* 3 execution phase
    val1 <- 10
    val2 <- 5
    addnum -> new environment + execution thread (again steps include)
        1 memory phase
            val1 - undefined 
            val2 - undefined 
            total - undefined
        2 execution context
            num1 - 10
            num2 - 5
            total - 15 (goes to global execution)
        (new environment deleated)
    result1 - 15
    result2 -> new environment + execution thread (again steps repeated)
        1 memory phase
        2 execution phase 
            total = 12
    result2 -> 12
*/

function one(){
    console.log(`one`)
    two()
}

function two(){
    console.log(`two`)
    three()
}

function three(){
    console.log(`three`)
}

one()
two()
three()


/* call stack (all in stack) -> last in first out (LIFO)


        |                   |
        |                   |
        |                   |
        |                   |
        |                   |
        |                   |
        |         three()   |
        |         two()     |
        |    one()          |
        |_globalenvironment_|

*/
//const myNums = [1, 2, 3, 4]

//const myTotal = myNums.reduce(function (acc, curval){
//    console.log(`acc: ${acc} and curval: ${curval}`)
//    return acc + curval
//}, 0) 


//const myTotal = myNums.reduce((acc,curr)=> acc+curr, 0)
//console.log(myTotal);


const shoppingCart = [
{
    itemName: "jscourse",
    price: 2999
},
{
    itemName: "python",
    price: 999
},
{
    itemName: "java",
    price: 5999
},
{
    itemName: "node",
    price: 12999
},
]

const priceTopay = shoppingCart.reduce((acc, item) => {acc + item.price
console.log(acc , item);
return acc + item.price
}, 0)

console.log(priceTopay);

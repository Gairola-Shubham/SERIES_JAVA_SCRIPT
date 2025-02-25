const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


// advance object in java script


//const mynewobj = Object.create(null)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai : function(){
        console.log("code fhat gya")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
        
}
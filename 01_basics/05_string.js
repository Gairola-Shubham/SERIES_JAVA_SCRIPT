const name = "subh"
const repoCount = 50

//console.log( name  + repoCount + " value ")

console.log(`hello my na,e is ${name} and my repoCount is ${repoCount}`);

const gameName = new String(`shubh-sh`)
console.log(gameName[0]);
console.log(gameName._proto_);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "   shubh    "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://shubh.com/shubh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('bleh'))

console.log(gameName.split('-'));


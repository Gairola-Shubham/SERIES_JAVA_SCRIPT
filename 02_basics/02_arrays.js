const marvel_heros =  ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman" ]

//arvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1])

//const allheros = marvel_heros.concat(dc_heros)
//console.log(allheros);

const allnewheros = [...marvel_heros, ...dc_heros]

//console.log(allnewheros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realanarray = another_array.flat(Infinity)
console.log(realanarray)




console.log(Array.isArray("shubh"))
console.log(Array.from("shubh"))
console.log(Array.from({name: "shubh"})) //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
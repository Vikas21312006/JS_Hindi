const marvel_heros = ["Thor", "Ironmam", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]


// marvel_heros.push(dc_heros)


// console.log(marvel_heros);

// marvel_cancat(dc_heros)
// console.log(marvel_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)//using spread


const another_array = [1, 2, 3, [4, 5, 6], [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Vikas"))
console.log(Array.from("Neelam"))
console.log(Array.from({name: "Vikas"})) // intresting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

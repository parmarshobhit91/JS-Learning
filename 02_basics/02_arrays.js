const marvel_heros = ['thor', 'Ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']

// marvel_heors.push(dc_heros)

// console.log(marvel_heors);
// console.log(marvel_heors[3][1]);

// const newArr = marvel_heors.concat(dc_heros)
// console.log(newArr);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array);

console.log(Array.isArray("Shobhit"));
console.log(Array.from("Shobhit"));
console.log(Array.from({name: "Shobhit"})); // very important

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

function printPokemon(index, pokemon) {
  console.log(`The fighter at index ${index} is ${pokemon.name}`);
}

const zFighters = [
  { name: "Goku", powerLevel: 9001, race: "Saiyan" },
  { name: "Gohan", powerLevel: 981, race: "Saiyan" },
  { name: "Piccolo", powerLevel: 3500, race: "Namekian" },
  { name: "Krillin", powerLevel: 1770, race: "Human" },
  { name: "Tien", powerLevel: 1830, race: "Human" },
  { name: "Yamcha", powerLevel: 1480, race: "Human" },
  { name: "Chiaotzu", powerLevel: 610, race: "???" },
];

const villains = [
  { name: "Saibamen", powerLevel: 1200, race: "Plant" },
  { name: "Nappa", powerLevel: 4000, race: "Saiyan" },
  { name: "Vegeta", powerLevel: 18000, race: "Saiyan" },
];

// this iterates over the array and prints every-other item
console.log(`There are ${zFighters.length} heros!`);
for (let i = 0; i < zFighters.length; i += 2) {
  printPokemon(i, zFighters[i])
  // console.log(`The fighter at index ${i} is ${zFighters[i].name}`);
}
console.log("")

// This iterates over the array in reverse
for (let i = zFighters.length - 1; i >= 0; i--) {
  printPokemon(i, zFighters[i])
}

// Simple code block example from lesson cheat sheet
// for (let i = 0; i < zFighters.length; i++) {
//   let hero = zFighters[i]; // Optional: I created an alias for more specification.
//   console.log(hero.name); // This will console log the name of each Z Fighter.
// }

villains.forEach(villain => console.log(villain.powerLevel))

const myForEachFunction = (pokemon) => console.log(pokemon);

function oldSchoolFunction(pokemon) {
  console.log("old school")
  console.log(pokemon)
}

console.log("villains")
villains.forEach(myForEachFunction)

console.log("fighters")
zFighters.forEach(oldSchoolFunction)




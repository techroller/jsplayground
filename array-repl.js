// You can add logs by using console.log
console.log('We ♡ JavaScript!');

// or by using a comment line with equals sign at the end of an expression
const obj = {
  language: 'javascript'
} //=

function hello() {
  return 'Hello World!';
};

// or a comment block with equals sign
hello() /*= */

// or just type the variable name
obj

// if the log represents an object you can use the dollar sign to access its properties
obj //= $.language

// also inside the log comments you can print every expression in your scope
hello() //= obj

// Besides, you can select one or more variables or expressions and press right click
// and select show value or explore the logs at the explorer on the left

// These usage information can be disabled in 'New commands'
// by checking JavaScript-repl: Usage Empty Content option in user's settings.


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

for (let i = 0; i < zFighters.length; i++) {
  console.log(`The fighter at index ${i} is ${zFighters[i].name}`)
}

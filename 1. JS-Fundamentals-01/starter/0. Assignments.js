// <============ Assignments in Part 1 ============>

// 01
const country = `Sri Lanka`;
const continent = `Asia`;
let population = 21.7;
console.log(country, continent, population); // Outputs: Sri Lanka Asia 21.7

// 02
const isIsland = true;
let language;
console.log(typeof isIsland, population, country, language); // Outputs: boolean 21.7 Sri Lanka undefined

// 03
language = `English`;

// 04
console.log(`${population / 2}m`);
population++;
console.log(`${population}m`);

const finlandPopulation = 6;
console.log(population > finlandPopulation);
console.log(population < 33);
let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);

// 05
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// 06
if (population > 33) {
  console.log(`${country}'s population is ${population - 33} million above average.`);
} else {
  console.log(`${country}'s population is ${33 - population} million below average`);
}

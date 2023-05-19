/*

Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 😉

*/

// Solution

// Test01: Mark = 78kg & 1.69m. John = 92kg & 1.95m.`

// 1. Mass & Height
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

// 2. BMI's of Mark & John
let markBMI = markMass / markHeight ** 2;
let roundedMarkBMI = markBMI.toFixed(2);
let johnBMI = johnMass / (johnHeight * johnHeight);
let roundedJohnBMI = johnBMI.toFixed(2);

// 3. Print out the BMIs
console.log(`Mark's BMI = ${roundedMarkBMI}`);
console.log(`John's BMI = ${roundedJohnBMI}`);

// if/else block
if (markBMI > johnBMI) {
  console.log(`"Mark's BMI ${roundedMarkBMI} is higher than John's ${roundedJohnBMI}!"`);
} else {
  console.log(`"John's BMI ${roundedJohnBMI} is higher than Mark's ${roundedMarkBMI}!"`);
}

console.log(``);

// Test02: Mark = 95kg & 1.88m. John = 85kg & 1.76m.

// 1. Mass & Height
markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;

// 2. BMI's of Mark & John
markBMI = markMass / markHeight ** 2;
roundedMarkBMI = markBMI.toFixed(2);
johnBMI = johnMass / (johnHeight * johnHeight);
roundedJohnBMI = johnBMI.toFixed(2);

// 3. Print out the BMIs
console.log(`Mark's BMI = ${roundedMarkBMI}`);
console.log(`John's BMI = ${roundedJohnBMI}`);

// if/else block
if (markBMI > johnBMI) {
  console.log(`"Mark's BMI ${roundedMarkBMI} is higher than John's ${roundedJohnBMI}!"`);
} else {
  console.log(`"John's BMI ${roundedJohnBMI} is higher than Mark's ${roundedMarkBMI}!"`);
}

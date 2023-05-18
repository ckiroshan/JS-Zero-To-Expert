/**
 * Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// Solution

console.log(`Test01: Mark = 78kg & 1.69m. John = 92kg & 1.95m.`)

// 1. Mass & Height
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

// 2. BMI's of Mark & John
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / (johnHeight * johnHeight);

console.log(`Mark's BMI = ${markBMI}`)
console.log(`John's BMI = ${johnBMI}`)

// Boolean value of markHigherBMI
let markHigherBMI = markBMI > johnBMI
console.log(`Does Mark have a higher BMI? ${markHigherBMI}`)
console.log(``)

console.log(`Test02: Mark = 95kg & 1.88m. John = 85kg & 1.76m.`)

// 1. Mass & Height
markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;
// 2. BMI's of Mark & John
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / (johnHeight * johnHeight);

console.log(`Mark's BMI = ${markBMI}`)
console.log(`John's BMI = ${johnBMI}`)

// Boolean value of markHigherBMI
markHigherBMI = markBMI > johnBMI
console.log(`Does Mark have a higher BMI? ${markHigherBMI}`)
console.log(``)


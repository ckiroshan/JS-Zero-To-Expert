// <============ Operators in JS ============>

// =========> Arithmetic operators

/**
 * + - * / %
 */

const currentYear = 2023;
const birthYearKane = 1999;
const birthYearSarah = 2005;
const ageKane = currentYear - birthYearKane;
const ageSarah = currentYear - birthYearSarah;

console.log(`The age of Kane is: ${ageKane}`);
console.log(`The age of Kane in 2025: ${2025 - birthYearKane}`);
console.log(`The age of Kane x 2: ${ageKane * 2}`);
console.log(`The age of Kane / 5: ${ageKane / 2}`);
console.log(`The exponentiation of 2 to the power of 3: ${2 ** 3}`);

console.log(`The age of Sarah is: ${ageSarah}`);
console.log(``);

// =========> Assignment operators

let x = 10 + 5;
console.log(x); // Outputs: 15

// In here, the plus operator executes first.
// next x gets assigned the value 15.
// This is based on operator precendence.

x += 10; // x = x + 1 = 25
x *= 10; // x = x + 1 = 250
x /= 10; // x = x + 1 = 25
x++; // x = x + 1 = 26
x--; // x = x + 1 = 25

console.log(x);

console.log(``);

// =========> Comparison operators

console.log(`Is Kane older than Sarah: ${ageKane > ageSarah}`);
console.log(`Is Sarah 18 or above: ${ageSarah >= 18}`);

console.log(``);

// =========> Operator precedence

let y, z;

y = z = 25 - 10 - 5;
/**
 * Math is done first (left to right))
 * Assignment is Executed from (right to left).
*/

console.log(z, y);

// Calculate average age of Kane & Sarah
const averageAge = (ageKane + ageSarah) / 2
console.log(averageAge)
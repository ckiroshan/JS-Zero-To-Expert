// <============ Primitive Data types ============>

let javaSciprtIsFun = true;

console.log(javaSciprtIsFun); // Outputs: true
console.log(typeof javaSciprtIsFun); // Outputs: boolean
console.log(typeof true); // Outputs: boolean
console.log(typeof "Kane"); // Outputs: string
console.log(typeof 74); // Outputs: number

// changing value of a declared variable
javaSciprtIsFun = 23;
console.log(typeof javaSciprtIsFun); // Outputs: number

// undefined (means empty value)
let year;
console.log(year); // Outputs: undefined
console.log(typeof year); // Outputs: undefined

/**
 * when we declare a empty variable.
 * the value of it will be undefined.
 * the type of it will be undefined as well
 */

// A bug in JS
console.log(typeof null); // Outputs: object.

// This is not fixed due to legacy reasons. because null is not an object.

// <============ let,const,var keywords ============>

//  =========> let
// 'let' - value can change later

let city = "negombo";
city = "colombo";

console.log(city); // Outputs: colombo
// the 'city' variable gets mutated to a new value.

// =========> const
// 'const' - value cannot change later.
// they are immutable.
// empty const can't be created.

const myName = "Kane";
console.log(myName); // Outputs: Kane

/**
 * As best practice,
 * => use 'const' always.
 * => only use 'let' when you know for sure value can change in future.
*/
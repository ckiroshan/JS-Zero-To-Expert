// <============ Type conversion & coercion ============>

/**
 * Type conversion = manually converting from one type to another.
 * Type coercion = JS converts them behind the scenes for us.
 **/

// =======> Type Conversion

const inputYear = "1991";
console.log(Number(inputYear));

// Converts String to Number.
console.log(Number(inputYear), inputYear); // Outputs: 1991 '1991'
console.log(Number(inputYear) + 18); // Outputs: 2009

console.log(Number(`Kane`)); // Outputs: NaN ==> Invalid number & is not (Not a number).
console.log(typeof NaN); // Outputs: number (It means its a number but just invalid)
console.log(String(23)); // Outputs: 23 (String value)

// =======> Type Coercion
console.log("I'm " + 23 + " years old");
// Plus operator triggers a coercion to strings.
// When theres a an operatoin between a number & string.
// Number will be converted to string.

console.log("23" - "10" - 3); // Outputs: 10 (minus converts to Number)
console.log("23" + "10" + 3); // Outputs: 23103 (plus converts to String)
console.log("23" * "2"); // Outputs: 46 (Multiply converts to Number)
console.log("23" / "2"); // Outputs: 11.5 (Division converts to Number)

// Guess the number
let n = "1" + 1; // becomes 11 (String)
n = n - 1; // 11 - 1 = 10. (Number)
console.log(n);  // Outputs: 10

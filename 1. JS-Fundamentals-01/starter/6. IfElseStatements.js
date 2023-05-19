// <============ If / Else statements ============>

const age = 13;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Kane can start his driving license now 😉!`);
  // emoji: Windows key + .
} else {
  const yearsLeft = 18 - age;
  console.log(`Kane is too young 😔, Wait another ${yearsLeft} years`);
}

// Else block is optional.
// If not present, JS would simply move to next line if condition is false.

// The above is called a 'if/else control structure'.
// Its called control as we have more control over the way our code is executed.
// Because it doesn't execute all blocks in the above. only the important ones.

// Example 02:

const myName = prompt(`What is your Name?`);
const birthYear = prompt(`What is your Birth Year?`);

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(`Hi ${myName}! Since you are born in ${birthYear}, you belong to the ${century} century!`)
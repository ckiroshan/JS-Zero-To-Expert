// <============ Truthy & Falsy ============>

// 5 falsy values = 0, '', undefined, null, NaN.
// The above turn false when we try to convert them into boolean.

console.log(Boolean(0)); // Outputs: false
console.log(Boolean(undefined)); // Outputs: false
console.log(Boolean("Jones")); // Outputs: true (Any string that isn't empty is truthy value)
console.log(Boolean({})); // Outputs: true
console.log(Boolean("")); // Outputs: false

// coercion in If/Else statements

const money = 0;
if (money) {
    // Any variable/condition inside 'if' turns into boolean by coercion.
    // money turns false as 0 is falsy.
  console.log("Don't spend it all ;)");
} else {
    // So this gets executed.
    console.log("You should get a job!")
}

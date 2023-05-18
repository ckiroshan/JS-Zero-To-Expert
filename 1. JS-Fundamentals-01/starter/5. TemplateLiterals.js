// <============ Template literals ============>

const firstName = "Kane";
const job = "Elite Software Engineer";
const birthYear = 1999;
const currentYear = 2021;

const kane = "I'm " + firstName + ", a " + (currentYear - birthYear) + " year old " + job + "!";
console.log(kane);

// Since this is a hectic, the following way can used to do this.

// Template literals were introduced from ES6.

const newKane = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
console.log(newKane)


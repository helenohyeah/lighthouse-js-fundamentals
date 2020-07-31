// returns a string e.g. "Suzie is 32 years old."
function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return `${name} is ${age} years old.`;
}

// testing
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
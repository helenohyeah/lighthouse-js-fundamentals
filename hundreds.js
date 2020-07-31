// given a number
// return how many hundreds fit into that number
function howManyHundreds(num) {
  let hundreds = Math.floor(num / 100);
  return hundreds;
}

// testing
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
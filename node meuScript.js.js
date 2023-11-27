function operation(number) {
  let plus = 0;

  for (let i = 1; i < number; i++) {
    // Verify with the number is divisible.
    if (i % 3 === 0 || i % 5 === 0) {
      plus += i;
    }
  }

  return plus;
}

// Example of use.
const numberinfo = 10; // Replace for the number wanted
const result = operation(numberinfo);

console.log(`The sum of the multiples of ${numberinfo} is: ${result}`);
function operation(number) {
    let sum = 0;
    let divisibleNumbers = [];
  
    for (let i = 1; i < number; i++) {
      // Check if the number is divisible by 3 or 5.
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
        divisibleNumbers.push(i);
      }
    }
  
    return { sum, divisibleNumbers };
  }
  
  // Get user input
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a number to operate on: ', (numberinfo) => {
    // Check if the input is a valid number
    const number = parseInt(numberinfo, 10);
    if (isNaN(number) || number <= 0) {
      console.log('Please enter a valid number greater than zero.');
    } else {
      const { sum, divisibleNumbers } = operation(number);
      console.log(`The sum of multiples of ${number} is: ${sum}`);
      console.log(`Numbers divisible by 3 or 5 up to ${number} are: ${divisibleNumbers.join(', ')}`);
    }
  
    readline.close();
  });
  
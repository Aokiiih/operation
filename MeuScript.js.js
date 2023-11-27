function operation(number) {
  let sum = 0;
  let divisibleNumbers = [];

  for (let i = 1; i < number; i++) {
    // Verificar se o número é divisível por 3 ou 5.
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
      divisibleNumbers.push(i);
    }
  }

  return { sum, divisibleNumbers };
}

// Obter a entrada do usuário
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite um número para operar: ', (numberinfo) => {
  // Verificar se a entrada é um número válido
  const number = parseInt(numberinfo, 10);
  if (isNaN(number) || number <= 0) {
    console.log('Por favor, insira um número válido maior que zero.');
  } else {
    const { sum, divisibleNumbers } = operation(number);
    console.log(`A soma dos múltiplos de ${number} é: ${sum}`);
    console.log(`Os números divisíveis por 3 ou 5 até ${number} são: ${divisibleNumbers.join(', ')}`);
  }

  readline.close();
});

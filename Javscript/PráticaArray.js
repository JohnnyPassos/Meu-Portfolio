function verificarArray(numeros) {
    let naoParOuMenorQueZero = false;
    let divisiveisPor3E5 = true;
  
    for (let num of numeros) {
      if (num % 2 !== 0 || num < 0) {
        naoParOuMenorQueZero = true;
      }
  
      if (num % 3 !== 0 || num % 5 !== 0) {
        divisiveisPor3E5 = false;
      }
    }
  
    return [naoParOuMenorQueZero, divisiveisPor3E5];
  }
  
  // Exemplo de uso:
  const numeros = [15, 30, 45, 6, -3];
  
  const [resultado1, resultado2] = verificarArray(numeros);
  
  console.log(`Pelo menos um número não é par ou menor que zero? ${resultado1 ? 'Sim' : 'Não'}`);
  console.log(`Todos os números são divisíveis por 3 e 5? ${resultado2 ? 'Sim' : 'Não'}`);
  
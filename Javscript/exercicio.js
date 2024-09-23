let numeros = [1, 5, 10, 15, 20];
let maiorNumero = numeros[0]; 

console.log (numeros [2]);


for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}

console.log("O maior número é:", maiorNumero); // Saída: O maior número é: 20



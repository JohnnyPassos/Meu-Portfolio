let numeros = [-1, 2, -5, 7, -8, 10, -25, 90, -78];

let numerosPositivos = []; // Arrays to store positive and negative numbers
let numerosNegativos = [];

for (let n = 0; n < numeros.length; n++) { // Iterate through the 'numeros' array
    if (numeros[n] > 0) { // Check if the number is positive
        numerosPositivos.push(numeros[n]); // Add to the positive array
    } else if (numeros[n] < 0) { // Check if the number is negative
        numerosNegativos.push(numeros[n]); // Add to the negative array
    }
}

console.log("Os números positivos são:", numerosPositivos);
console.log("Os números negativos são:", numerosNegativos);

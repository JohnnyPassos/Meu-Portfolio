let numeros = [5, 2, 8, 1, 9];

// Ordenar o array
numeros.sort(); // Output: [1, 2, 5, 8, 9]

// Adicionar um elemento no final
numeros.push(3); // Output: [1, 2, 5, 8, 9, 3]

// Remover o primeiro elemento
numeros.shift(); // Output: [2, 5, 8, 9, 3]

// Iterar sobre o array
numeros.forEach(function(numero) {
    console.log(numero);
});

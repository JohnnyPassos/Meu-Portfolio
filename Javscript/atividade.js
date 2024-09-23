const array = [1, 'hello', 2, 'world', true, 3, null];

// Usando map para duplicar números e transformar strings em maiúsculas
const modifiedArray = array.map(element => {
    if (typeof element === 'number') {
        return element * 2;
    } else if (typeof element === 'string') {
        return element.toUpperCase();
    } else {
        return element;
    }
});

console.log(modifiedArray); // [2, 'HELLO', 4, 'WORLD', true, 6, null]

// Usando filter para obter apenas os números
const numbersArray = array.filter(element => typeof element === 'number');

console.log(numbersArray); // [1, 2, 3]

// Usando reduce para somar todos os números
const sumOfNumbers = array.reduce((accumulator, element) => {
    if (typeof element === 'number') {
        return accumulator + element;
    } else {
        return accumulator;
    }
}, 0);

console.log(sumOfNumbers); // 6


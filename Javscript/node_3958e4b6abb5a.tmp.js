const carros = [

  { id: 1, modelo: "Onix", marca: "Chevrolet", preco: 86990, dataCriacao: "13/09/2024" },

  { id: 2, modelo: "Strada", marca: "Fiat", preco: 100990, dataCriacao: "13/09/2024" },

  { id: 3, modelo: "Polo", marca: "Volkswagen", preco: 78271, dataCriacao: "13/09/2024" }

];

let totalPrecos = 0;

for (let i = 0; i < carros.length; i) {

  const carro = carros[i];

  totalPrecos += carro.preco;

}

console.log("Total dos preços dos carros:", totalPrecos);
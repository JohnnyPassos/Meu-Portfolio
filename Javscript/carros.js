const carros = [

    { id: 1, modelo: "Onix", marca: "Chevrolet", preco: 86990 , anoData : "2024" },
  
    { id: 2, modelo: "Strada", marca: "Fiat", preco: 100990, anoData : "2024"},
  
    { id: 3, modelo: "Polo", marca: "Volkswagen", preco: 79990, anoData: "2024" }
  
  ];
  
  let totalPrecos = 0;
  
  for (let i = 0; i < carros.length; i++) {
  
    const carro = carros[i];
  
    totalPrecos += carro.preco;
  
  }
  
  console.log("Total dos preços dos carros:", totalPrecos); 

  const carros1 = ["Onix", "Strada", "Polo"];

console.log("Iteração usando forin:");

for (let indice in carros) {

  console.log("Índice:", indice, "Valor:", carros[indice]);

}

console.log("Iteração usando forof:");

for (let carro of carros) {

  console.log("Valor:", carro);

}

  
  
let cidade = [];
cidade[0] = "Campinas";
cidade[1] = "Campo Grande";
cidade[2] = "Fortaleza"; // Corrigindo o índice para 2
cidade[3] = "Rio Branco"; // Corrigindo o índice para 3
cidade[4] = "Belém";

let cidadeMaior = cidade[0]; // Inicializa com a primeira cidade

for (let i = 1; i < cidade.length; i++) {
  if (cidade[i].length > cidadeMaior.length) {
    cidadeMaior = cidade[i];
  }
}

console.log("A cidade com mais letras é:", cidadeMaior); // Saída: A cidade com mais letras é: Campo Grande

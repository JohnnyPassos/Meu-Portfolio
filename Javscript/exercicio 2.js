// Descobrir qual cidade tem maior número de letras
 
let cidade = []
cidade [0] = " Brasilia"
cidade [1]= "Unaí"
cidade [2]= "Santa Rita de Cássia"
cidade [3] = "Luís Eduardo Magalhaes"
cidade [4]= " Bom Jesus"

let cidadeMaior = cidade [0] // Inicializa a primeira cidade

for ( let i = 1; i < cidade.length; i++) {
 if   (cidade[i].length > cidadeMaior.length)
    cidadeMaior = cidade[i] ;
}
console.log ( " A cidade com maior número de letras é :", cidadeMaior)
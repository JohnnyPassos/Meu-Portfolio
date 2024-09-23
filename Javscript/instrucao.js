var pais = "Espanha";

if (pais !== "Brasil") {
    console.log ("Você é estrangeiro");
} else {
    console.log ("Você é brasileiro");
}

var idade = 70;

if (idade < 16 || idade > 65){
    console.log ("Você não vota");
}else if ( idade < 18) {
    console.log ( "Voto opcional");
    
} else {
    console.log ( "Voto é obrigatório");
}


let numeros = [1,2,3,4,5,6,7,8,9,10];

let resultado = numeros.filter(x => x % 2 == 0)
console.log(resultado);

let r5 = numeros.filter (r5 => r5 > 5);

console.log (r5);

let nums = numeros.map (function(valor) {
             return valor * 5



}
)
console.log (nums)




let produtos = [

{id: 1, descricao : "SmartPhone", categoria : "Eletrônicos"},
{id: 2, descricao : "Geladeira", categoria : "Eletrodomésticos"},
{id: 3, descricao : "Televisão", categoria : "Eletrônicos"},
{id: 4, descricao : "Fogão", categoria : "Eletrodomésticos"},

]

let eletronicos = produtos.filter (
    function(valor) {
       return valor.categoria == "Eletrônicos"

 }
)
 console.log (eletronicos);

 categorias = produtos.map( valor => valor.categoria)

 console.log (categorias)






/* *********** AULA 1 ************

var nome = "Priscila Chueryz";
var idade = 41;
var frase = "Japão é o melhor time do mundo."
var n1 = 30;
var n2 = 20;

//alert("meu primeiro js");

//alert("Bem Vinda, " + nome);

//alert(nome + " tem " + idade + " anos.");

console.log(frase.replace("Japão", "Brasil"));

console.log(frase.toUpperCase());

console.log(frase.toLowerCase());

console.log(n1 + n2);

// *********** AULA 2 *************

var lista = ["maçã", "pêra", "laranja"];
console.log(lista);
console.log(lista[2]);
lista.push("uva");
console.log(lista);
lista.pop("pêra");
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista[2]);
console.log(lista.toString()[2]);
console.log(lista.join("-"));

var fruta = {nome: "maçã", cor: "vermelho"};
console.log(fruta.nome);
console.log(fruta.cor);

*/

var frutas = [{nome: "maçã", cor: "vermelho"}, {nome: "uva", cor: "verde"}];
console.log(frutas[1].nome);
console.log(frutas[0].cor);
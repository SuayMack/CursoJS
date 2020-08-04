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
var frutas = [{nome: "maçã", cor: "vermelho"}, {nome: "uva", cor: "verde"}];
console.log(frutas[1].nome);
console.log(frutas[0].cor);

// *********** AULA 3 *************

var idade = prompt("Qual a sua idade?");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};

var count = 0;
while(count < 5){
    alert(count);
    console.log(count);
    count ++;
}

var count;
for(count = 0; count <= 5; count++){
    alert(count);
    console.log(count);
}

var d = new Date();
console.log(d);
console.log(d.getMonth() + 1);
console.log(d.getDay());

// *********** AULA 3 *************
function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(5,10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

var validar = 0;
function validaIdade(idade) {    
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
validaIdade(idade);
console.log(validar);

//console.log(setReplace("Vai Japão", "Japão", "Brasil"));

// *********** AULA 4 *************/

function clicou(){
    
    var clicou = document.getElementById("agradecimento"). innerHTML = "Obrigado por clicar";
    console.log(clicou);
    //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://google.com.br");
    //window.location.href = "https://google.com.br";
}
/*
function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    //console.log("trocar texto");
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    //console.log("trocar texto");
}
*/
function trocar(elemento) {
    elemento.innerHTML = "Obrigada por passar o mouse";
    //console.log("trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    //console.log("trocar texto");
}

function load() {
    alert("Página carregada");
}

function change(elemento) {
    console.log(elemento.value);
}
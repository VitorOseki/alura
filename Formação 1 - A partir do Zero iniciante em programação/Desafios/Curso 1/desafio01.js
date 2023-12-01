let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert("Boas vindas ao nosso site!");
alert("Erro! Preencha todos os campos.");

nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");

if (idade >= 18) {
    alert("Pode tirar a habilitação");
} else {
    alert("Não tem idade suficiente! Faltam " + (18 -idade) + " anos." );
}
// 1.

let diaDaSemana = prompt("Qual é o dia da semana?");

if ((diaDaSemana == "Sábado") || (diaDaSemana == "Domingo")) {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

// 2.

n = prompt("Digite um número:");

if (n < 0) { 
    alert("O número é negativo!");
} else {
    alert("O número é positivo!");
}

// 3.

let pontuacao = prompt("Informe a pontuação: ");

if (pontuacao >= 100) {
    alert("Parabéns você venceu!");
} else {
    alert("Tente novamente para ganhar!");
}

// 4.

valor = prompt("Qual o valor do saldo? ");
alert("O saldo da conta é R$" + valor);

// 5.

nome = prompt("Insira o nome: ");

alert("Bem-vindo, " + nome);
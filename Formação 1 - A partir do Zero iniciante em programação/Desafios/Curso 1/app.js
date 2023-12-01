let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio"

function clicouConsole() {
    console.log('O botão foi clicado!');
}

function clicouAlerta() {
    alert("Eu amo JS!");
}

function clicouPrompt() {
    let cidade = prompt("Digite o nome de uma cidade do Brasil: ");
    alert(`Estive em ${cidade} e lembrei de você`);
}

function clicouSoma() {
    let n1 = parseInt(prompt("Digite o primeiro número: "));
    let n2 = parseInt(prompt("Digite o segundo número: "));
    let resultado = n1 + n2;
    alert(`A soma entre ${n1} e ${n2} é igual a ${resultado}!`);
}
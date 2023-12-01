// 1. IMC

function calcularImc(altura, peso){
    let imc = peso/(altura*altura);
    return imc;
}

// 2. Fatorial

function calcularFatorial(n) {
    let fat = n;
    let i = n-1;
    for (i; i > 0;i--) {
    fat = fat*i;
    }
    return fat;
}

// 3. Dólar a R$4,80

function dolarEmReais(n) {
    let valor = n * 4.80;
    return valor;
}

// 4. Área e perímetro retângulo

function calcularAreaPerimetrorRet(altura, largura) {
    let area = altura * largura;
    let perímetro = (altura * 2) + (largura * 2);
    return (`Valor área: ${area}; Valor perímetro: ${perímetro}`);
}

// 5. Área e perímetro círculo

function calcularAreaPerimetrorCirculo(raio) {
    let area = 3.14 * (raio^2);
    let perímetro = 2 * 3.14 * raio;
    return (`Valor área: ${area}; Valor perímetro: ${perímetro}`);
}

// 6. Tabuada

function tabuadaNum(n){
    for (let i = 3; i < 5; i++) {
        return(`${n} x ${i} = ${n*i}`);
    }
}

console.log(tabuadaNum(6));

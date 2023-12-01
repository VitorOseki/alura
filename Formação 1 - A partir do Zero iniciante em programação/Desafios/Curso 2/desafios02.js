function olaMundo() {
    console.log("Olá, mundo!");
}

function mostrarNome(nome) {
    console.log(`Olá, ${nome}`);
}

function dobrarNum(num) {
    let dobro = num * 2;
    return dobro
}

function mediaTresNum(n1,n2,n3) {
    let media = (n1 + n2 + n3) / 3;
    return media;
}

function maiorDeDoisNum(n1,n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

function elePorEleMesmo(n1) {
    return n1*n1;
}

console.log(dobrarNum(15))
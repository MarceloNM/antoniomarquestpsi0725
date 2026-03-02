/*
Exercícios 18: Elabore um programa que leia uma entrada e diga quantos números perfeitos existem. 
Exemplo de número perfeito em que somando todos os divisores ele da o número inicial.
6=3+2+1 .   6, 28, 496, 8.128, 33.550.336
*/
const input = require ('prompt-sync')();
console.clear();


let num = parseInt(input(`Número para saber perfeitos até ele: `))

perfeitos(num);


function divisores(listaDivisores, numero) {
    for (let i = 1; i < numero; i++) {
        if (numero % i == 0) {
            listaDivisores.push(i);
        }
    }
}

function ePerfeito(listaDivisores, numero) {
    /*let soma = 0;
    for (const i of listaDivisores) {
        soma += i;
    }*/

    const soma = listaDivisores.reduce((somador, i) => { return somador + i}, 0);

    return soma == numero;
}

function perfeitos(num){
    for (let i = 1; i<=num; i++) {
        let divs = [];
        divisores(divs, i);
        if (ePerfeito(divs, i)) console.log(i);
    }
}

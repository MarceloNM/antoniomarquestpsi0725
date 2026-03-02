/*
Exercício 2: Ler 10 números, e determinar se o número par e número ímpar.
*/
const input = require ('prompt-sync')();
console.clear();

const quantidade = 10;
const numeros = [];

leNumeros(numeros, quantidade);
mostraNumeros(numeros, quantidade);

function leNumeros(numeros, quantidade) {
    for (let i = 0; i < quantidade; i++ ) {
        numeros[i] = parseInt(input(`Insira um numero inteiro(${i+1}): `));
    }
}

function mostraNumeros(numeros, quantidade) {
    for (let i = 0; i < quantidade; i++ ) {
        console.log(`o numero ${numeros[i]} é ${paridade(numeros[i])}`);
    }
}
// devole a paridade de um inteiro
function paridade(num){
    return num % 2 == 0 ? 'par' : 'ímpar' ; 
}

/*
Exercício 4: Crie um algoritmo que leia um número inteiro, e diga se ele é um número primo ou não.
*/
const input = require ('prompt-sync')();
console.clear();

let num = parseInt(input("insira um número inteiro: "));
console.log(`O número ${num}${ePrimo(num)? '': ' não'} é primo.`);

function ePrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}


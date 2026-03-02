/*
Exercício 6: Crie um algoritmo que mostre os 10 primeiros números primos.
*/
const input = require ('prompt-sync')();
console.clear();

let quantidade = input("Quantidade de primos: ");

escrevePrimos(quantidade);

function escrevePrimos(qt) {
    contador = 0;
    numero = 0;
    do {
        numero++;
        if (ePrimo(numero)) {
            contador++;
            console.log(numero);
        }
    } while (contador < qt);
}

function ePrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
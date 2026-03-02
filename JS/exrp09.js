/*
Exercício 9: Escreva um programa que solicite um número ao utilizador 
até que o valor deste esteja entre os valores 1 e 100.
 (Use o ciclo do ... while)
*/
const input = require ('prompt-sync')();
console.clear();

const inicio = 1;
const fim = 100;

console.log(lerNum(inicio, fim));


function lerNum(i, f) {
    let certo = false;
    let n = 0;
    do {
        n = parseInt(input(`Número entre ${i} e ${f}: `));
        if ( n >= i && n <= f ) certo = true;

    } while (!certo);
    return n;
}

/*
Exercícios 19:Escreva um programa que mostre os primeiros 60 números da serie fibonacci.
1, 1, 2, 3, 5, 8, 13, 21.
Como se constrói.
1+1=2
    1+2=3
        2+3=5

*/
const input = require ('prompt-sync')();
console.clear();


let max = 60;


serieFibonacci(max);


function serieFibonacci(numero) {
    let nf = 1, nf0 = 0;
    let nf1 = 1;
    let i = 0;
    process.stdout.write(`${nf0}, `);
    for (; i < numero-1; i++) {
        process.stdout.write(`${nf}, `);
        nf = nf0 + nf1;
        nf0 = nf1;
        nf1 = nf;
    }
    process.stdout.write(`${nf}.`);
}


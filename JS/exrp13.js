/*
Exercício 13: Elabore um programa que leia um número e mostre a tabuada. (multiplicar de 1 a 10).
*/
const input = require ('prompt-sync')();
console.clear();


let num = parseInt(input(`Número para escrever a tabuada: `))
tabuada(num);

function tabuada(n) {
    for (let i = 1; i < 11; i++) {
        console.log(`${n} X ${i} = ${n * i}`);
    }
}

/*
Exercício 14: Altere o programa anterior para que mostre todas as tabuadas de 1 a 100. (ciclos for).
*/
const input = require ('prompt-sync')();
console.clear();

let num = 100;
// num = parseInt(input(`Número para escrever a tabuada: `))
tabuada(num);

function tabuada(numero) {
    for (let n = 1; n <= numero; n++) {
        for (let i = 1; i < 11; i++) {
            console.log(`${n} X ${i} = ${n * i}`);
        }
        console.log("");
    }
}
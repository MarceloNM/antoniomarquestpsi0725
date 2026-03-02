/*
Exercício 7: Faça um algoritmo que gere a seguinte série: 10, 20, 30, 40, ..... 980, 990, 1000.
*/
const input = require ('prompt-sync')();
console.clear();

let num = input("Último número da série: ");
dezenas(num);

function dezenas(num) {
    let n = num.length === 0 ? 1000 : parseInt(num);
    let i = 10;
    for ( ; i < n; i+=10) {
        // console.log(`${i} `);
        process.stdout.write(`${i}, `);
    }
    process.stdout.write(`${i}.`);
}
/*
Exercício 5: Elabore um programa que escreve os primeiros 10.000 números inteiros no ecrã.
*/
const input = require ('prompt-sync')();
console.clear();

let num = input("Quantidade de inteiros: ");
escreveNinteiros(num);

function escreveNinteiros(num) {
    let n = num.length === 0 ? 10000 : parseInt(num);
    for (let i = 0; i < n; i++) {
        // console.log(`${i} `);
        process.stdout.write(`${i} `);
    }
}


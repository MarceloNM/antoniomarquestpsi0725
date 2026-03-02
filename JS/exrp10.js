/*
Exercício 10: Elabore um programa que lê um número e escreve quantos divisores ele possui.
*/
const input = require ('prompt-sync')();
console.clear();

let divs = [];
let qt_divisores = 0;

let num = parseInt(input(`Número para saber divisores: `))
qt_divisores = divisores(divs, num);
mostra_resultado(num, qt_divisores, divs);


function divisores(d, n) {
    let qt = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            qt++;
            d.push(i);
        }
    }
    return qt;
}

function mostra_resultado(num, q, d){
    process.stdout.write(`O número ${num} `);
    if (q > 0) {
        process.stdout.write(`tem ${q} divisores (`);
        //process.stdout.write(' (');
        let i = 0;
        for (; i < q-1; i++) {
            process.stdout.write(`${d[i]}${q>1?',':''} `);
        }
        if (q > 1) process.stdout.write(`${d[i]})`);
    } else process.stdout.write('é primo, não tem divisores');
}
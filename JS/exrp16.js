/*
Exercícios 16: Elabore um programa que constitua a média de 30 números pares 
que sejam introduzidos. Validando a entrada de números inteiros entre 1 e 50.
*/
const input = require ('prompt-sync')();
console.clear();

let min = 1;
let max = 50;
let qt = 30;  // 30;
let media = 0;

media = mediaInteiros(qt, min, max);
console.log(`A média é ${media}`);

function lerInteiroPar(i, min, mx){
    let certo = false;
    let num = 0;
    let entrada = '';
    do {
        entrada = input(`Introduza um número par entre ${min} e ${max} (${i+1}): `).trim();
        if (/^(?:[+-]?[1-9]\d*$)|(?:^0)$/.test(entrada)){
            num = parseInt(entrada);
            certo = num % 2 == 0;
        } 
    } while (!certo);
    return num;
}

function mediaInteiros(qt, min, max) {
    let somador = 0;
    for (let i = 0; i < qt; i++) {
        somador += lerInteiroPar(i, min, max);
    }
    return (somador / qt).toFixed(2);
}

/*
Exercício 2: Encontrar o Maior e o Menor Valor entre 3 Números
Enunciado:
 Desenvolva um programa que analise 3 valores inteiros e informe qual o maior e qual o menor deles.
Exemplo:
 Entrada: num1 = 5, num2 = 2, num3 = 8
 Saída esperada:
 Maior: 8
 Menor: 2
*/

const input = require ('prompt-sync')();
const dim = 3;
const snum = [];
console.clear();

lerNums(snum, dim);
// snum[0] = input("Introduza muitos segundos: ");
console.log(`O número maior é: ${smaior(snum)}`);
console.log(`O número menor é: ${smenor(snum)}`);


function lerNums(snum, dim){
    for (let i = 0; i < dim; i++) {
        snum[i] = input(`Introduza um número (${i}): `);
    }
};

function smaior(snum) {
    comprimento = snum.length;
    let maior = 0;
    for (let i = 0; i < comprimento; i++) {
        if (string2num(snum[i]) > maior) maior = snum[i];
    }
    return maior;
}

function smenor(snum) {
    comprimento = snum.length;
    let menor = string2num(snum[0]);
    for (let i = 0; i < comprimento; i++) {
        if (string2num(snum[i]) < menor) menor = snum[i];
    }
    return menor;
}

function string2num(texto) {
    let comprimento = texto.length;
    let numero = 0; 
    for (let i = 0; i<comprimento; i++) {
        numero += (texto.charCodeAt(comprimento-1-i)-48) * 10**i;
        // console.log(numero);
    }
    return numero;
}


/*
Exercício 3: Mostrar Números em Ordem Crescente e Decrescente
Enunciado:
 Crie 2 variáveis (num1 e num2) e leia o valor para cada uma delas. Mostre os valores de forma crescente e decrescente.
Exemplo:
 Entrada: num1 = 7, num2 = 2
 Saída esperada:
 Crescente: 2, 7
 Decrescente: 7, 2
*/

const input = require ('prompt-sync')();
const dim = 2;
const snum = [];
console.clear();

lerNums(snum, dim);

console.log(`Origem: ${snum}`);
console.log(`Crescente: ${crescente(snum)}`);
console.log(`Decrescente: ${decrescente(snum)}`);


function lerNums(snum, dim){
    for (let i = 0; i < dim; i++) {
        snum[i] = string2num(input(`Introduza um número (${i}): `));
    }
};


function crescente(snum) {
    let lnum = snum;
    for (let i = 0; i < snum.length; i++) {
        for (let j = i+1; j < snum.length; j++) {
            if (lnum[i] > lnum[j]){ 
                let t = lnum[i];
                lnum[i] = lnum[j];
                lnum[j] = t; 
            }
        }
    }
    return lnum;
}

function decrescente(snum) {
    let lnum = snum;
    for (let i = 0; i < snum.length; i++) {
        for (let j = i+1; j < snum.length; j++) {
            if (lnum[i] < lnum[j]){ 
                let t = lnum[i];
                lnum[i] = lnum[j];
                lnum[j] = t; 
            }
        }
    }
    return lnum;
}

function string2num(texto) {
    let comprimento = texto.length;
    let numero = 0; 
    for (let i = 0; i<comprimento; i++) {
        numero += (texto.charCodeAt(comprimento-1-i)-48) * 10**i;
    }
    return numero;
}


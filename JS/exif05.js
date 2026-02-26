/*
Exercício 5: Ler 3 Valores e Exibir em Ordem Crescente e Decrescente
Enunciado:
 Ler 3 valores inteiros e apresentar os valores dispostos em ordem crescente e decrescente.
Exemplo:
 Entrada: num1 = 4, num2 = 9, num3 = 2
 Saída esperada:
 Crescente: 2, 4, 9
 Decrescente: 9, 4, 2
*/

const input = require ('prompt-sync')();
const dim = 3;
const snum = [];
console.clear();

lerNums(snum, dim);
// snum[0] = input("Introduza muitos segundos: ");

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
        // console.log(numero);
    }
    return numero;
}


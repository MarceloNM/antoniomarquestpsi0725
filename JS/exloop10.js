/*
Exercício Loop: Identificar Números Pares e Ímpares
Enunciado:
 Leia 10 números e determine quantos são pares e quantos são ímpares.
Exemplo:
 Entrada: 2, 3, 5, 6, 8, 9, 10, 12, 14, 15
 Saída esperada:
 Pares: 6
 Ímpares: 4
*/

const input = require ('prompt-sync')();

const dim = 10;
const numeros = [];  //[2, 3, 5, 6, 8, 9, 10, 12, 14, 15];

let pares = 0;

console.clear();

lerNumeros(dim);
pares = calcPares(dim);
escreveResultado(pares, dim);

function lerNumeros(dim){
    for (let i = 0; i < dim; i++) {
        numeros[i] = parseInt(input(`Número ${i+1}: `));
    }
};

function calcPares(dim){
    let pares = 0;
    for (let i = 0; i < dim; i++) {
        pares += (numeros[i] %2 == 0 ? 1 : 0); 
    }
    return pares;
};

function escreveResultado(pares, dim) {
    console.log('Pares: ', pares);
    console.log(`Ímpares: ${dim - pares}`);
}

/*
Exercícios 17: Elabore um programa que determine os múltiplos de 5 mas não múltiplos de 3 …. 
De 1 a 1000 deve ser a sequência.
*/
const input = require ('prompt-sync')();
console.clear();

let todos = 1000;
let sim = 5;
let nao = 3;

mostraMultiplos(todos,sim,nao)


function multN(n,mult){
    return n % mult == 0;
}

function testeMult(num, sim, nao) {
    return multN(num, sim) && !multN(num, nao);
}

function mostraMultiplos(t, s, n) {
    for (let i = 1; i <= t; i++) {
        if (testeMult(i,s,n)) console.log(i);
    }
}

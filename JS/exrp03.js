/*
Exercício 3: Ler a nota de 10 alunos, calcular a media e mostrar essa média.
*/
const input = require ('prompt-sync')();
console.clear();

const quantidade = 10;  // 10
const notas = [];

leNotas(notas, quantidade);
mostraMedia(notas);

function leNotas(notas, quantidade) {
    for (let i = 0; i < quantidade; i++ ) {
        notas[i] = parseFloat(input(`Insira a nota do aluno (${i+1}): `));
    }
}

function mostraMedia(notas) {
    let soma = 0;
    let qt = notas.length;
    for (let i = 0; i < qt; i++ ) {
        soma += notas[i];
    }
    console.log(`A média das notas é ${(soma/qt).toFixed(1)}`);
}


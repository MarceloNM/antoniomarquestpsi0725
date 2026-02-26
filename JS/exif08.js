/*
Exercício 8: Calcular a Média de 10 Notas e informar notas iguais ou acima da media 
Enunciado:
Crie um programa que leia a nota de 10 alunos (notas de 0 a 20), 
calcule a média das notas e mostre a média. Além disso, 
informe quantos alunos ficaram com a nota igual ou acima da média. 
*/

const input = require ('prompt-sync')();

const dim = 10;
const notas = [];     // [12,8,19,6,15,16,7,13,12,18];

let alunosAbaixo = 0;

console.clear();

lerNotas(dim);
let media = calcularMedia(dim);
alunosAbaixo = calcAbaixo(dim, media);
escreveResultado(media, alunosAbaixo, dim);

function lerNotas(dim){
    for (let i = 0; i < dim; i++) {
        notas[i] = parseFloat(input(`Nota do aluno ${i+1}: `));
    }
};

function calcularMedia(dim){
    let total = 0;
    let peso = 0
    for (let i = 0; i < dim; i++) {
        total += notas[i];
    }
    return total / dim; 
}

function calcAbaixo(dim, media) {
    let abaixo = 0;
    for (let i = 0; i < dim; i++) {
        abaixo += (notas[i] < media ? 1 : 0);
    }
    return abaixo; 
}

function escreveResultado(media, alunosAbaixo, dim) {
    console.log(`Média: ${media}`);
    console.log(`Alunos com nota superior ou igual à média: ${dim - alunosAbaixo}`);
}

/*
Exercício 7: Calcular a Média de Notas com Pesos
Enunciado:
 O sistema de avaliação de uma disciplina tem três provas com pesos diferentes. 
 primeira tem peso 2, a segunda tem peso 3, e a terceira tem peso 5. 
 Crie um programa para calcular a média final de um aluno e mostrar 
    se ele está APROVADO (nota >= 6) ou REPROVADO (nota < 6).
Exemplo:
 Entrada: Nota1 = 7, Nota2 = 6, Nota3 = 9
 Saída esperada:
 Média: 7.4
 Aprovado
*/

const input = require ('prompt-sync')();

const dim = 3;
const pesos = [2, 3, 5];
const notas = [];

console.clear();

lerNotas(dim);
let media = calcularMedia(dim);
escreveResultado(media);

function lerNotas(dim){
    for (let i = 0; i < dim; i++) {
        notas[i] = parseFloat(input(`Nota ${i+1}: `));
    }
};

function calcularMedia(dim){
    let total = 0;
    let peso = 0
    for (let i = 0; i < dim; i++) {
        total += notas[i] * pesos[i];
        peso += pesos[i];
    }
    return total / peso; 
}

function escreveResultado(media) {
    console.log(`Média: ${media}`);
    console.log(`${media >= 6 ? 'Aprovado' : 'Reprovado'}`);
}

/*
Exercício Switch: Exibir Nome do Mês
Enunciado:
Leia um número inteiro de 1 a 12 e mostre o nome do mês correspondente. Caso o número não seja válido, mostre uma mensagem de erro.
Exemplo:
 Entrada: 5
 Saída esperada: Maio
*/

const input = require ('prompt-sync')();

let numero = 0;
let nome = '';
console.clear();

numero = lerInteiro();
nome = queMes(numero);

escreveResultado(nome);

function lerInteiro(){
    return parseInt(input('Introduza um número inteiro entre 1 e 12: '));
};

function queMes(num){
    let nome = '';
    switch (num){
        case 1:
            nome = 'janeiro';
            break;
        case 2:
            nome = 'fevereiro';
            break;
        case 3:
            nome = 'março';
            break;
        case 4:
            nome = 'abril';
            break;
        case 5:
            nome = 'maio';
            break;
        case 6:
            nome = 'junho';
            break;
        case 7:
            nome = 'julho';
            break;
        case 8:
            nome = 'agosto';
            break;
        case 9:
            nome = 'setembro';
            break;
        case 10:
            nome = 'outubro';
            break;
        case 11:
            nome = 'novembro';
            break;
        case 12:
            nome = 'dezembro';
            break;
        default:
            nome = '';
            break;
    }
    return nome; 
}

function escreveResultado(nome) {
    if (nome === '') console.log('O número que introduziu é incorreto!');
    else console.log('Mês: ', nome);
}

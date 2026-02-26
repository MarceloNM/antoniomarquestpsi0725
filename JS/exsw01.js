/*
1. Tipo de dia
Cria um programa que receba o nome de um dia da semana e diga se é dia útil ou fim de semana.
Exemplo:
Entrada → domingo
Saída → Fim de semana
*/

const input = require ('prompt-sync')();

let nomeDia = '';
console.clear();

nomeDia = input('Nome de um dia da semana: ');
let tipoDia = queDia(nomeDia);

escreveResultado(tipoDia);

function queDia(nome){
    let tipo = 0;
    switch (nome){
        case 'segunda':
        case 'terça':
        case 'terca':
        case 'quarta':
        case 'quinta':
        case 'sexta':
            tipo = 1;
            break;
        case 'sabado':
        case 'sábado':
        case 'domingo':
            tipo = 2;
            break;
        default:
            break;
    }
    return tipo; 
}

function escreveResultado(tipo) {
    if (tipo == 0) console.log('O nome que introduziu é incorreto!');
    else if (tipo == 1) console.log('Dia útil');
    else console.log('Fim de semana');
}

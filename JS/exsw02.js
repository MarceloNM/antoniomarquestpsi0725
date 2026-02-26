/*
2. Classificação de nota
Lê uma nota (0–100) e retorna uma classificação:
    • 90 ou mais → Excelente
    • 70–89 → Bom
    • 50–69 → Suficiente
    • Abaixo de 50 → Insuficiente
Exemplo:
Entrada → Bom
Saída →  70-89
*/

const input = require ('prompt-sync')();

let classificacao = '';
console.clear();

classificacao = input('Qual a classificação: ');
let emNumeros = paraNumeros(classificacao);

escreveResultado(emNumeros);

function paraNumeros(classificao){
    let numeros = '';
    switch (classificacao){
        case 'Bom':
        case 'bom':
            numeros = "70-89";
            break;
        case 'Excelente':
        case 'excelente':
            numeros = "90 ou mais";
            break;
        case 'Insuficiente':
        case 'insuficiente':
            numeros = "Abaixo de 50";
            break;
        case 'Suficiente':
        case 'suficiente':
            numeros = "50-69";
            break;
        default:
            break;
    }
    return numeros; 
}

function escreveResultado(emNumeros) {
    if (emNumeros == '') console.log('A classificação que introduziu é incorreta!');
    else console.log(emNumeros);
}

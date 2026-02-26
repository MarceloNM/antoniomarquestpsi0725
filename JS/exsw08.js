/*
8. Operação matemática
Recebe uma operação (em texto) e dois números.
Operações válidas: "soma", "subtrai", "multiplica", "divide".
Exemplo:
Entrada →
Operação: "divide"
Número 1: 20
Número 2: 4
Saída → 5
*/

const input = require ('prompt-sync')();

let n1, n2, op;


console.clear();

op = input('Operação ("soma", "subtrai", "multiplica", "divide"): ');
n1 = parseInt(input("Número 1: "));
n2 = parseInt(input("Número 2: "));

opera(n1, n2, op);

function opera(n1, n2, op) {
    let resultado = 0;
    switch (op) {
        case 'soma':
            resultado = n1 + n2;
            break;
        case 'subtrai':
            resultado = n1 - n2;
            break;
        case 'multiplica':
            resultado = n1 * n2;
            break;
        case 'divide':
            if (n2 != 0)
                resultado = n1 / n2;
            else console.log("valor inválido");
            break;
        default:
            console.log("operação desconhecida");
    }
    console.log(resultado);
}

/*
Exercícios 15: Elabore um programa que escreva no ecrã todas as linhas 
de código ASCII(0 a 255) e o código correspondente. 
Dispor de 20 em 20 com a condição de continuação ou saída do programa.
*/
const input = require ('prompt-sync')();
console.clear();

let max = 255;
let pag = 20;
// num = parseInt(input(`Número para escrever a tabuada: `))
mostrascii(max, pag);

function mostrascii(max) {
    continuar = true;
    ene = 0;
    do {
        console.log(`${String.fromCharCode(ene)} - ${ene++}`);
        if (ene % pag == 0) continuar = pergunta();
    } while (continuar && ene <= max);
}

function pergunta(){
    let res = true;
    let p = input("Quer continuar(s/n)? ");
    switch (p) {
        case "s": case "S": case "y": case "Y":
            res = true;
            break;
        case "n": case "N":
            res = false;
            break;
        default:
    }
    return res;
}
/*
Exercício 4: Verificar se o Cheque Pode Ser Descontado
Enunciado:
 Desenvolva um Programa que leia o saldo inicial de um cliente de banco e leia também o valor de um cheque. 
 Analise se o cheque pode ser descontado. Se o cheque não puder ser descontado, mostre essa informação, 
 caso contrário, desconte o cheque e informe o saldo atualizado.
Exemplo:
 Entrada: Saldo = 500, Cheque = 300
 Saída esperada:
 Cheque descontado, saldo: 200
*/

const input = require ('prompt-sync')();

let saldoCliente = 1000;
let levantamento = 0;
console.clear();

saldoCliente = lerValores("Saldo atribuído ao cliente");
levantamento = lerValores("Quantia a levantar");

escreveResultado(saldoCliente, levantamento);


function lerValores(etiqueta){
    valor = string2num(input(`${etiqueta}: `));
    return valor;
};

function escreveResultado(saldo, saida) {
    console.log(`Entrada: Saldo = ${saldo}, Cheque = ${saida}`)
    if (saida > saldo) console.log("Não tem saldo suficiente para essa operação");
    else {
        console.log(`Cheque descontado, saldo: ${saldo-saida} `);
    }

}

function string2num(texto) {
    let comprimento = texto.length;
    let numero = 0; 
    for (let i = 0; i<comprimento; i++) {
        numero += (texto.charCodeAt(comprimento-1-i)-48) * 10**i;
        // console.log(numero);
    }
    return numero;
}


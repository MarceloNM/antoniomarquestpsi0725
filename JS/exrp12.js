/*
Exercício 12: Elabore um programa que leia quantos números 
quer que se efetue a soma, subtrações, divisões, multiplicações 
e no fim por meio de um acumulador diga quantas operações foram efetuadas. 
Exemplo introduzindo o número 60 o programa deve apresentar 60 a somar, 
dividir, multiplicar e subtrair por todos os números menores que ele.
*/
const input = require ('prompt-sync')();
console.clear();

let qt_operacoes = 0;

let num = parseInt(input(`Quantidade de números a operar: `))
qt_operacoes = operacoes(num);
mostra_resultado(num, qt_operacoes);

function operacoes(n) {
    let qt = 0;
    for (let i = n; i > 0; i--) {
        process.stdout.write(`${n} + ${i} = ${n + i}; `);
        process.stdout.write(`${n} - ${i} = ${n - i}; `);
        process.stdout.write(`${n} / ${i} = ${(n / i).toFixed(2)}; `);
        process.stdout.write(`${n} * ${i} = ${n * i}\n`);
        qt+=4;
    }
    return qt;
}

function mostra_resultado(n, q){
    console.log(`O número ${n} foi operado ${q} vezes`);
}

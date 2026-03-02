/*
Exercício 11: Elabore um ciclo for para produzir o seguinte output.
	1
	22
	333
	4444
	55555
*/
const input = require ('prompt-sync')();
console.clear();
let qt_degraus = 5;
// qt_degraus = parseInt(input(`Quantidade de degraus: `))
mostra_degraus1(qt_degraus);
mostra_degraus2(qt_degraus);

// com um ciclo
function mostra_degraus1(d){
    for (let i = 1; i <= d; i++) {
        let palavra = i.toString().repeat(i);
        console.log(palavra);
    }
}
// com dois ciclos
function mostra_degraus2(d){
    for (let i = 1; i <= d; i++) {
        let palavra = '';
        for (let j = 0; j < i; j++) {
            palavra += i.toString();
        }
        console.log(palavra);
    }
}

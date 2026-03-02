/*
Exercício 1: Crie um algoritmo que mostre os 30 primeiros números ímpares e pares.
*/
const input = require ('prompt-sync')();

console.clear();

const quantidade = 30;

mostraNumeros(quantidade, 'par');
mostraNumeros(quantidade, 'impar');


function mostraNumeros(quantidade, paridade) {
    contador = 0;
    numero = 0;
    do {
        numero++;
        switch (paridade) {
            case 'par':
                if (ePar(numero)){
                    console.log(numero);
                    contador++;
                }
                break;
            case 'impar':
                if (!ePar(numero)){
                    console.log(numero);
                    contador++;
                }
                break;
            default:
        }
    } while (contador < quantidade);
}

// devole true se o número for par e false se não for
function ePar(num){
    return num % 2 == 0 ; 
}

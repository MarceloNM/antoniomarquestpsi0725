/*
Exercício 1: Converter Segundos em Horas, Minutos e Segundos
Enunciado:
 Desenvolva um programa que assuma uma entrada em segundos e a converta para horas, minutos e segundos.
Exemplo:
 Entrada: 3665 segundos
 Saída esperada: 1 hora, 1 minuto e 5 segundos.
*/

const input = require ('prompt-sync')();
let texto = "";
console.clear();
texto = input("Introduza muitos segundos: ");
console.log(`Agora em horas: ${seg2HMS(texto)} h`);


function seg2HMS(segundos){
    let num = string2num(segundos);
    let horas = Math.trunc(num / 3600);
    num = num % 3600;
    let minutos = Math.trunc(num / 60);
    let seg = num % 60;

    let hms = normal2(horas)+ ":" + normal2(minutos) + ":" + normal2(seg);
    return hms;
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

function normal2(num) {
    let str2 = "00";
    if (num > 0) {
        str2 = num.toString();
        if (num < 10) str2 = '0' + str2;
    }
    return str2;
}

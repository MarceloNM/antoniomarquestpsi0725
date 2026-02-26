/*
4. Tipo de dado
Analisa um valor e retorna o seu tipo:
    • Número inteiro
    • Número decimal
    • String numérica
    • String textual
    • Lista
    • Tipo desconhecido
Exemplo:
Entrada → [10, 20, 30]
Saída → Lista
*/

const input = require ('prompt-sync')();

console.clear();
console.log("----------------");

let todos = ["123", "-123", "+123", "123.4", "-123.4", "+123.46", "efGh", "'123456'", '"123456"', "[10, 20, 30]", "y-%67&y", ""];

// x = input("qualquer coisa: ");

//x = "12345";
// x = "[10, 20, 30]";

for (let i = 0; i < todos.length; i++) {
    let x = todos[i]
    console.log(queTipo(x));
}



function queTipo(palavra){
    let y = palavra.trim();
    let msg = "";    
    let dim = y.length;
    // let coisa = [];
    // for (let i = 0; i < dim; i++) {
    //     coisa[i] = y[i];
    //     console.log(y.charCodeAt(i));
    // }
    let first = y[0];
    let codef = y.charCodeAt(0);
    let last = y[y.length-1];
    let codel = y.charCodeAt(y.length - 1);

    // console.log(y.charCodeAt(0));

    switch (true) {
        case (first == "[" && last == "]"):
            console.log("Provavelmente uma lista...");
            break;
        case (codef > 48 && codef < 59):
            console.log("Começa por um número...");
            break;
        /*case /\[[^\]]*\]/.test(y):
            console.log(y, " Lista");
            break;
        case /\'*\'/i.test(y):
            console.log(y, "String 1");
            break;*/
        /*case /\'[^\]]*\'/i.test(y):
            console.log(y, "String 11");
            break; */
        /*case /\"*\"/i.test(y):
            console.log(y, "String 2");
            break;
        case /^(?:[+-]?[1-9]\d*$)|(?:^0)$/.test(y):
            console.log(y, "Número inteiro");
            break;
        case /^[+-]?(\d*\.)?\d+$/.test(y):
            console.log(y, "Número decimal");
            break;
        case /[a-z]/g.test(y):
            console.log(y, "String");
            break;
        case /[^a-z]/g.test(y):
            console.log(y, "String com símbolos");
            break;
        case /""/.test(y):
            console.log(y, "String vazia");
            break; */
        default:
            console.log(`"${y}" Tipo desconhedido`);
            break;    
    }
    return msg; 
}

function escreveResultado(msg) {
    console.log(msg);
}

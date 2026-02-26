/*
5. Análise de mensagem
Recebe uma mensagem e retorna:
    • “Saudação” se for “olá” ou “bom dia”
    • “Pergunta” se terminar com “?”
    • “Despedida” se contiver “tchau” ou “adeus”
    • “Mensagem genérica” caso contrário
Exemplo:
Entrada → “Tudo bem?”
Saída → Pergunta
*/

const input = require ('prompt-sync')();

let x = "";

console.clear();

x = input("Escreva mensagem: ");

analisa(x);

function analisa(x) {
    if (x.indexOf("ola") !== -1 || x.indexOf("olá") != -1 || x.indexOf("bom dia") != -1 ) console.log("Saudação");
    else if (x.indexOf("?") > -1) console.log("Pergunta");
    else if (x.indexOf("tchau") != -1 || x.indexOf("adeus") != -1 || x.indexOf("Adeus") != -1 ) console.log("Despedida");
    else console.log("Mensagem genérica");
}






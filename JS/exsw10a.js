/*
10. Jogo: Pedra, Papel ou Tesoura
Cria um programa que receba duas jogadas:
    • Jogador 1
    • Jogador 2
Usa match para determinar o resultado:
    • Pedra ganha de Tesoura
    • Tesoura ganha de Papel
    • Papel ganha de Pedra
    • Se forem iguais, é Empate
Exemplo:
Entrada →
Jogador 1: pedra
Jogador 2: tesoura
Saída → Jogador 1 venceu
*/

const input = require ('prompt-sync')();

let jogador1 = '';
let jogador2 = '';

console.clear();

jogador1 = jogada("Jogador 1");
jogador2 = jogada("Jogador 2");
resultado(jogador1, jogador2);


function jogada(jogador) {
    let jog = '';
    let base = ["pedra","papel","tesoura"];
    let errado = true;
    do {
        jog = input(`${jogador} ("pedra", "papel" ou "tesoura"): `);
        errado = jog.search(/pedra|papel|tesoura/i) == -1;
    } while (errado);
    return jog;
}

function encontrar(palavra, lista) {
    for (let i = 0; i < lista.length; i++) {
        // if (lista[i].match(palavra)) return i; // o match não funciona porque basta uma letra para validar
        if (lista[i] == palavra) return i;
    }
    return -1;
}

function resultado(j1,j2) {
    let msg = 'empate';
    switch (j1) {
        case 'pedra':
            if (j2 === "tesoura") msg = 'jogador 1 venceu';
            else if (j2 === "papel") msg = 'jogador 2 venceu'; 
            break;
        case 'tesoura':
            if (j2 === "papel") msg = 'jogador 1 venceu';
            else if (j2 === "pedra") msg = 'jogador 2 venceu'; 
            break;
        case 'papel':
            if (j2 === "pedra") msg = 'jogador 1 venceu';
            else if (j2 === "tesoura") msg = 'jogador 2 venceu'; 
            break;
        default:
    }
    console.log(msg);
}

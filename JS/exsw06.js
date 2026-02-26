/*
6. Estado do servidor
Recebe um dicionário com as chaves "status" e "tempo_resposta".
Retorna:
    • “Servidor ativo” se o status for “ok”
    • “Servidor lento” se o status for “ok” e o tempo de resposta for maior que 200 ms
    • “Servidor indisponível” se o status for “erro”
    • “Estado desconhecido” caso contrário
Exemplo:
Entrada → {"status": "ok", "tempo_resposta": 350}
Saída → Servidor lento
*/



const input = require ('prompt-sync')();

let estado = {"status": "", "tempo_resposta":0};

console.clear();

lerEstado(estado);
serverState(estado);


function lerEstado(estado) {
    estado.status = input("Indique estado do servidor ('ok' ou 'erro'): ");
    estado.tempo_resposta = parseInt(input("Indique tempo de resposta (ms): "));
}


function serverState(estado) {
    let msg = "Estado desconhecido"; 
    switch (estado.status) {
        case 'ok':
            if (estado.tempo_resposta > 200) msg = "Servidor lento";
            else msg = "Servidor ativo";
            break;
        case 'erro':
            msg = "Servidor indisponível";
            break;
        default:
    }
    console.log(msg);
}
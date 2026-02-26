/*
9. Processamento de requisição
Recebe um dicionário com as chaves "metodo" e "conteudo".
Retorna:
    • “Requisição GET recebida” se o método for “GET”
    • “Requisição POST com dados válidos” se o método for “POST” e o conteúdo não estiver vazio
    • “Requisição POST sem dados” se o método for “POST” e o conteúdo estiver vazio
    • “Método não suportado” caso contrário
Exemplo:
Entrada → {"metodo": "POST", "conteudo": ""}
Saída → Requisição POST sem dados
*/

const input = require ('prompt-sync')();

let requisi = {"metodo": "", "conteudo": ""};

console.clear();

lerRequisi(requisi);
descricao(requisi);

function lerRequisi(requisi) {
    requisi.metodo = input("Método ('GET' ou 'POST'): ");
    requisi.conteudo = input("Conteúdo: ");
}

function descricao(requisi) {
    let msg = "Método não suportado"; 
    switch (requisi.metodo) {
        case 'POST':
            if (requisi.conteudo.length > 0) msg = "Requisição POST com dados válidos";
            else msg = "Requisição POST sem dados";
            break;
        case 'GET':
            msg = "Requisição GET recebida";
            break;
        default:
    }
    console.log(msg);
}
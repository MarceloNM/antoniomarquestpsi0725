/*
3. Tipo de pedido
Recebe um dicionário com as chaves "tipo" e "valor".
Exibe:
    • “Compra de X€” se tipo for “compra”
    • “Venda de X€” se tipo for “venda”
    • “Pedido desconhecido” caso contrário
Exemplo:
Entrada → {"tipo": "venda", "valor": 250}
Saída → Venda de 250€
*/

const input = require ('prompt-sync')();

const acao = {
    "tipo" : "venda",
    "valor": 250
}

console.clear();

lerAcao(acao);

let mensagem = paraString(acao);
escreveResultado(mensagem);

function lerAcao(ac){
    ac.tipo = input("Compra ou venda: ");
    ac.valor = parseFloat(input("Introduza valor: "));
}

function paraString(elemento){
    let msg = '';
    switch (elemento.tipo){
        case 'Venda':
        case 'venda':
            msg = "Venda" + ' de ' + elemento.valor.toString() + '€';
            break;
        case 'Compra':
        case 'compra':
            msg = "Compra" + ' de ' + elemento.valor.toString() + '€';
            break;
        default:
            msg = "Pedido desconhecido";
            break;
    }
    return msg; 
}

function escreveResultado(msg) {
    console.log(msg);
}

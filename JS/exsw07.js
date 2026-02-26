/*
7. Classificação de produto
Recebe um dicionário com as chaves "categoria" e "preco".
Retorna:
    • “Produto de luxo” se categoria for “eletrônico” e preço acima de 1000
    • “Produto comum” se categoria for “eletrônico” e preço até 1000
    • “Produto alimentar” se categoria for “alimento”
    • “Categoria desconhecida” caso contrário
Exemplo:
Entrada → {"categoria": "eletrônico", "preco": 1500}
Saída → Produto de luxo
*/



const input = require ('prompt-sync')();

let produto = {"categoria": "", "preco":0};

console.clear();

lerProduto(produto);
classificacao(produto);


function lerProduto(produto) {
    produto.categoria = input("Categoria do produto ('eletronico' ou 'alimento'): ");
    produto.preco = parseFloat(input("Indique o preço do produto: "));
}


function classificacao(produto) {
    let msg = "Categoria desconhecida"; 
    switch (produto.categoria) {
        case 'eletronico':
            if (produto.preco > 1000) msg = "Produto de luxo";
            else msg = "Produto comum";
            break;
        case 'alimento':
            msg = "Produto alimentar";
            break;
        default:
    }
    console.log(msg);
}
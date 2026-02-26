/*
Exercício 6: Desconto de Compra
Enunciado:
 Uma loja oferece descontos de acordo com o valor da compra:
10% para compras até 200,00€.
15% para compras entre 200,01€ e 500,00€.
20% para compras acima de 500,00€.
 Desenvolva um Programa que leia o nome do cliente e o valor da compra e mostre o valor do desconto e o valor total a pagar.
Exemplo:
 Entrada: Cliente: João, Compra: 350
 Saída esperada:
 Nome: João
 Compra: 350,00€
 Desconto: 52,50€
 Total a pagar: 297,50€
*/

const input = require ('prompt-sync')();

let nomeCliente = '';
let valorCompra = 0;
console.clear();

nomeCliente = input("Nome do Cliente: ");

valorCompra = parseFloat(input("Valor total da compra: "));

escreveResultado(nomeCliente, valorCompra);


function escreveResultado(nome, valor) {
    console.log(`Nome: ${nome}`)
    console.log('Compra: ', new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(valor));
    let desconto = 0; //, apagar = 0;

    desconto = valor * (valor <= 200 ? .1 : valor < 500 ? .15 : .2);
    console.log('Desconto: ', new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(desconto));
    console.log('Total a pagar: ',new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(valor - desconto));
}

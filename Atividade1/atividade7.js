//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.
const quantidade = parseInt(prompt("Digite a quantidade de maçãs:"));
let total;
if (quantidade < 12) {
    total = quantidade * 0.30;
} else {
    total = quantidade * 0.25;
}
console.log(`Valor total: R$ ${total.toFixed(2)}`);
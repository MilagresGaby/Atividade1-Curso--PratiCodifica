//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//utilizando um loop for ou while.
const numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;
for (let i = 2; i <= numero; i++) {
    fatorial *= i;
}
console.log(`Fatorial de ${numero}: ${fatorial}`);
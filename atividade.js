//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.
const numero = parseInt(prompt("Digite um número inteiro:"));
if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}
//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.
const idade = parseInt(prompt("Digite a idade:"));
if (idade < 12) {
    console.log("Criança");
} else if (idade < 18) {
    console.log("Adolescente");
} else if (idade < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}
//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
console.log("1. Opção 1");
console.log("2. Opção 2");
console.log("3. Opção 3");
const opcao = prompt("Escolha uma opção:");

switch (opcao) {
    case "1":
        console.log("Você escolheu a opção 1");
        break;
    case "2":
        console.log("Você escolheu a opção 2");
        break;
    case "3":
        console.log("Você escolheu a opção 3");
        break;
    default:
        console.log("Opção inválida");
}
//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.
console.log("1. Opção 1");
console.log("2. Opção 2");
console.log("3. Opção 3");
const opcao = prompt("Escolha uma opção:");

switch (opcao) {
    case "1":
        console.log("Você escolheu a opção 1");
        break;
    case "2":
        console.log("Você escolheu a opção 2");
        break;
    case "3":
        console.log("Você escolheu a opção 3");
        break;
    default:
        console.log("Opção inválida");
}
//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.
const peso = parseFloat(prompt("Digite seu peso (kg):"));
const altura = parseFloat(prompt("Digite sua altura (m):"));
const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Baixo peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}
//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
//Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
const a = parseFloat(prompt("Digite o lado A:"));
const b = parseFloat(prompt("Digite o lado B:"));
const c = parseFloat(prompt("Digite o lado C:"));

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log("Triângulo equilátero");
    } else if (a === b || a === c || b === c) {
        console.log("Triângulo isósceles");
    } else {
        console.log("Triângulo escaleno");
    }
} else {
    console.log("Os lados não formam um triângulo");
}
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
//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente
const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
const valor2 = parseFloat(prompt("Digite o segundo valor:"));
if (valor1 < valor2) {
    console.log(valor1, valor2);
} else {
    console.log(valor2, valor1);
}
//9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
//utilizando um loop for.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes[
const num = parseInt(prompt("Digite um número inteiro:"));
for (let i = 0; i < 10; i++) {
    console.log(num);
^}
//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//utilizando um loop for
let soma = 0;
for (let i = 0; i < 5; i++) {
    const num = parseFloat(prompt(`Digite o ${i+1}º número:`));
    soma += num;
}
console.log(`Soma total: ${soma}`);
//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//10) Utilizando um loop for.
const numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.
let soma = 0;
let contador = 0;
let numero;
do {
    numero = parseFloat(prompt("Digite um número (0 para sair):"));
    if (numero !== 0) {
        soma += numero;
        contador++;
    }
} while (numero !== 0);

if (contador > 0) {
    console.log(`Média: ${soma / contador}`);
} else {
    console.log("Nenhum número foi digitado.");
}
//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//utilizando um loop for ou while.
const numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;
for (let i = 2; i <= numero; i++) {
    fatorial *= i;
}
console.log(`Fatorial de ${numero}: ${fatorial}`);
//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.
let a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 2; i < 10; i++) {
    const proximo = a + b;
    console.log(proximo);
    a = b;
    b = proximo;
}












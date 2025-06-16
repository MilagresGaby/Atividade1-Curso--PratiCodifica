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
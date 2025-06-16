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
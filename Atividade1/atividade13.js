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
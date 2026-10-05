const prompt = require("prompt-sync")();

let lista= ['Amanda', 'Kayc', 'Joao,', 'Livia', 'Julia'];
const nome = prompt("Digite um nome pra ver se está na lista:");

if (lista.includes(nome)) {
    console.log(lista[4],"está na lista.");
} else {
    console.log(lista[4],"não está na lista.");
}
const prompt = require('prompt-sync')();
let numero= prompt("Digite um número");
if(numero % 2 === 0){
    console.log('Número é par')
}else{
    console.log('Número é ímpar')
}
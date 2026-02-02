const prompt = require('prompt-sync')();
let n1= prompt("Digite um número");
let n2= prompt("Digite um 2 número");
if(n1>n2){
    console.log("o primeiro número é maior do que o segundo")
}else if(n1<n2){
    console.log("O segundo número é maior do que o primeiro")
}else if(n1==n2){
    console.log("Os números são iguais")
}

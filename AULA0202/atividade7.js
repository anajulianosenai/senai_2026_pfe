const prompt = require('prompt-sync')();
let numero=Number(prompt("Digite um número"));
let numero2=Number(prompt("Digite o 2 número"));
let operacao= prompt("Digite a operação");
if(operacao=='+'){
   console.log("Soma é "+ (numero+numero2))
}else if(operacao=='-'){
    console.log("Subtração "+ (numero-numero2))
}else if(operacao=='*'){
    console.log("Multiplicação é "+ numero*numero2)
}else if(operacao=="/"){
    console.log("Divisão é "+numero/numero2)
}
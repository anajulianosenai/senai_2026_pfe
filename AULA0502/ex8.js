const prompt = require('prompt-sync')();
let numero= Number(prompt('Digite um número'));
let aletorio=Math.random;
console.log(aletorio);
if(numero===aletorio){
    console.log("Eles são iguais")
}else if(numero!==aletorio){
    console.log("Eles são diferentes")
};

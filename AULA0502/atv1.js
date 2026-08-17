const prompt = require('prompt-sync')();
let pontuacao= Number(prompt('Digite seus pontos'));
let divisao= pontuacao/2;
let pot= divisao**2;
console.log("pontos são" + pot);
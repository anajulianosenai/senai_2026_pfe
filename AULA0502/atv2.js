const prompt = require('prompt-sync')();
let idade=(prompt('Digite sua idade'));
if(idade<17){
    console.log("Você não é maior de idade e não pode emprestar livros")
}else if(idade>=18){
    console.log("Você é maior de idade e pode emprestar livros")
}
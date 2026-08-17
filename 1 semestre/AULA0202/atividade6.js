const prompt = require('prompt-sync')();
let idade= prompt("Digite sua idade");
if(idade<12){
    console.log("Criança")
}else if(idade>= 12 && < 18 ){
    console.log("Adolescente")
}else if(idade >= 18 && < 60){
    console.log("Adulto")
}else{
    console.log("Idoso")
}
    

let operacao= '-'
const calculo= function(numero1, numero2, operacao){
    if (operacao == '+'){
        console.log('A soma é' + (numero1+ numero1));

    }else if(operacao == '-'){
        console.log('A subtração é '+ (numero1- numero2));

    }else if(operacao == '/'){
        console.log('A divisão é '+ (numero1/numero2));
    }else if(operacao == '*'){
        console.log('A multiplicação é '+ (numero1+numero2));
    }
}
calculo(10,5,'*')
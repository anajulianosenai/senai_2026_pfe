const numeros = [1,2,3,4,-5,6,-7];

function buscaNumeros(numeros, numero){
    for(let i = 0; i < numeros.length; i++){
        if(numero == numeros[i]){
            console.log(`O número ${numeros[i]} foi localizado!`);
            return;
        }
    }
    console.log('numero -1')
}

buscaNumeros(numeros, 1)
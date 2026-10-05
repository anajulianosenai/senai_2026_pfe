let numeros = [10 ,20, 0, 60, 50];

function ordenaComContador(listaNumeros) {
    let totalTrocas = 0;
    
    for (let elemento of listaNumeros) {
        for (let i = 0; i < listaNumeros.length - 1; i++) {
            if (listaNumeros[i] > listaNumeros[i + 1]) {
                [listaNumeros[i], listaNumeros[i + 1]] = [listaNumeros[i + 1], listaNumeros[i]];
                totalTrocas++;
            }
        }
    }
    
    console.log("Total de trocas realizadas:", totalTrocas);
    return listaNumeros;
}

console.log("Array ordenado:", ordenaComContador(numeros));

let salarios = [10.000, 6.000, 19.000, 4.000, 3.000];
function ordenaSalarios(listaSalarios) {
    let tamanho = listaSalarios.length;
    
    for (let i = 0; i < tamanho - 1; i++) {
        let indiceMaior = i;
        
        for (let j = i + 1; j < tamanho; j++) {
            if (listaSalarios[j] > listaSalarios[indiceMaior]) indiceMaior = j;
        }
        [listaSalarios[i], listaSalarios[indiceMaior]] = [listaSalarios[indiceMaior], listaSalarios[i]];
    }
    return listaSalarios;
}

console.log(ordenaSalarios(salarios));


let temperaturas = [25, 18, -1, 9, 10];

function selectionSort(listaTemperaturas) {
    let tamanho = listaTemperaturas.length;
    for (let i = 0; i < tamanho - 1; i++) {
        let indiceMenor = i;
        for (let j = i + 1; j < tamanho; j++) {
            if (listaTemperaturas[j] < listaTemperaturas[indiceMenor]) {
                indiceMenor = j;
            }
        }
        let auxiliar = listaTemperaturas[i];
        listaTemperaturas[i] = listaTemperaturas[indiceMenor];
        listaTemperaturas[indiceMenor] = auxiliar;
    }
    return listaTemperaturas;
}

console.log(selectionSort(temperaturas));

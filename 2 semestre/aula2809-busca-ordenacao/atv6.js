let idades = [10,18,50,30,20];
function ordenaIdades(listaIdades) {
    let tamanho = listaIdades.length;
    
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho - 1; j++) {
            if (listaIdades[j] > listaIdades[j + 1]) {
                // Troca de posição
                let auxiliar = listaIdades[j];
                listaIdades[j] = listaIdades[j + 1];
                listaIdades[j + 1] = auxiliar;
            }
        }
    }
    return listaIdades;
}

console.log(ordenaIdades(idades));
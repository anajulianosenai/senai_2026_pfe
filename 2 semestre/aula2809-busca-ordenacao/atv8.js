let frutas = ["banana", "morango", "melão", "amora", "abacate"];
function ordenaPorTamanho(listaPalavras) {
    let tamanho = listaPalavras.length;
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho - 1; j++) {

            // Compara o tamanho das palavras
            if (listaPalavras[j].length > listaPalavras[j + 1].length) {
                // aqui vai trocar de posição
                let auxiliar = listaPalavras[j];
                listaPalavras[j] = listaPalavras[j + 1];
                listaPalavras[j + 1] = auxiliar;
            }
        }
    }
    return listaPalavras;
}

console.log(ordenaPorTamanho(frutas));
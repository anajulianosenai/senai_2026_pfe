const idades = [18, 17, 10, 7, 16];

function ordenaIdade(idades) {
    for (let i = 0; i < idades.length; i++) {

        for (let j = 0; j < idades.length - 1; j++) {

        if (idades[j] > idades[j + 1]) {
        let aux = idades[j];
        idades[j] = idades[j + 1];
        idades[j + 1] = aux;

            }
        }
    }
 return idades;
}

console.log("Idades ordenadas:", ordenaIdade(idades));
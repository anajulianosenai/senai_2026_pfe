let alunos = ["4 - Ana Alfreda","5 - Alfredo","3 - Malta","7 - Brian","2 - Sueny"
];

function ordenaAlunos(listaAlunos) {
    let tamanho = listaAlunos.length;
    
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho - 1; j++) {
            // Compara os textos
            if (listaAlunos[j] > listaAlunos[j + 1]) {
                let auxiliar = listaAlunos[j];
                listaAlunos[j] = listaAlunos[j + 1];
                listaAlunos[j + 1] = auxiliar;
            }
        }
    }
    return listaAlunos;
}

console.log(ordenaAlunos(alunos));


const notas =[10,10,9,8,10];

function contarNotasMaximas(listaNotas) {
    let contador = 0;
    
    for (let i = 0; i < listaNotas.length; i++) {
        if (listaNotas[i] == 10) {
            contador++;
        }
    }
    
    return contador;
}

console.log(contarNotasMaximas(notas));

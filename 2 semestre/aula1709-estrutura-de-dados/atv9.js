let numeros = [1, 5, 3, 5, 5, 2, 5];

let contador = 0; //contador vai contar quantas vezes o numero 5 aparece no array

for (let numero of numeros) { //Toda vez que contador ve numero 5,contador++ vai de 0 pra 1 e por ai vai ate ele contar tudo
    if (numero === 5) {
        contador++;
    }
}

console.log(contador);
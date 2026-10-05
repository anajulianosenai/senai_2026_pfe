let vetor = [1, 2, 3, 4, 5];
let crescente = true;

for (let i = 0; i < 4; i++) {
    if (vetor[i] > vetor[i + 1]) crescente = false;
}

console.log(crescente); 
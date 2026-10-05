let palavras = [];

function registrarPalavra(palavra) {
    palavras.push(palavra);
}

function desfazer() {
    palavras.pop();
}
registrarPalavra('Eu');
registrarPalavra('estou');
registrarPalavra('COM');
registrarPalavra('FOME');
console.log(palavras);
desfazer();
console.log(palavras);
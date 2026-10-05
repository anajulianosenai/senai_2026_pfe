const numeros = [1, 2, 3, 4, 5, 6,7,8];
let contador = 0;

for (let i = 0; i < numeros.length; i++) { //a expressao vai verificar se o numero é par dividindo por 2 e resto 0, se for par ele soma +1 
  if (numeros[i] % 2 === 0) { 
    contador++;
  }
}

console.log(contador, 'numeros são pares');
let carros = [
{ modelo: "Celta", anoFabricacao: 2010 },
{ modelo: "Fusca", anoFabricacao: 1978 },
{ modelo: "Civic", anoFabricacao: 2015 },
{ modelo: "Uno", anoFabricacao: 2008 }
];

function ordenaCarros(listaCarros) {
for (let carros of listaCarros) {
for (let i = 0; i < listaCarros.length - 1; i++) {
    if (listaCarros[i].anoFabricacao > listaCarros[i + 1].anoFabricacao) {
        [listaCarros[i], listaCarros[i + 1]] = [listaCarros[i + 1], listaCarros[i]];
        }
    }
}
return listaCarros;
}

console.log(ordenaCarros(carros));

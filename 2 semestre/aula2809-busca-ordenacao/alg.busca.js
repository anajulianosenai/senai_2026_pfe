const bandas = ['SLIPKNOT', 'METALLICA', 'QUEEN', 'LED ZEPPELIN', 'AC/DC', 'IRON MAIDEN'];
function buscaBandas(bandas, banda){
    for(let i = 0; i < bandas.length; i++){
        if(banda == bandas[i]){
            console.log(`A banda ${bandas[i]} foi localizada !`);
            return;
        }
    }
    console.log('Banda inexistente !')
}
buscaBandas(bandas, 'SLIPKNOT');
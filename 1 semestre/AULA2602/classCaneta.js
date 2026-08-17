class Caneta{
    cor= 'preta';  
    marca= 'bic';
    ponta= 'fina'
    qtdTinta=5;
    tampa= false;

    escrever(){
        return 'Começou a escrever';
    }
    sublinhar(valor){
        this.qtdTinta -= valor;
        return this.qtdTinta;

    }
}
const canetaFina = new Caneta();
console.log(canetaFina.escrever());
console.log(canetaFina.sublinhar(2));
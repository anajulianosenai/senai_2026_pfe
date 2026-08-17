class Carro{
    //atributos
    modelo='510 cabine dupla';
    marca='Chevrolet';
    ano= 2025;
    preco= 200000;

    //metodos
    mover(){
        console.log('Estou me movendo!');
    }
    mostrar(){
        console.log('O carro é ' + this.modelo + '' + this.marca + '' + this.ano+ '' + this.preco);
    }
}
const caminhonete= new Carro();
caminhonete.mover();
caminhonete.mostrar();
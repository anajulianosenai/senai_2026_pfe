class Pessoa{
    nome; //atributo publico
    #cpf= '54644515876';

    setCpf(valor){
        this.#cpf = valor;
    }
    getCpf(){
        return this.#cpf
    }
}
const estudante= new Pessoa();
estudante.nome ='Ana';
estudante.setCpf(54644515876);
console.log('Cpf é' + estudante-getCpf());
console.log(estudante.nome);
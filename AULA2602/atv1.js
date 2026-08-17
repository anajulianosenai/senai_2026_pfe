class Piloto {
    #nome;
    #numero;
    constructor(nome, numero) { //CRIA OBJETO
    this.#nome = nome;
    this.#numero = numero;
    }
    getNome() { return this.#nome; } 
    getNumero() { return this.#numero; }
} // CLASSE MAE


class PilotoF1 extends Piloto {
    #totalVoltas = 0;
    constructor(nome, numero) {
        super(nome, numero); //PUXA DA CLASSE MAE
    }
   
    correr(voltas) {
        this.#totalVoltas += voltas;
        return `O piloto ${this.getNome()} completou ${voltas} voltas.`;//ele traz as informações de forma resumida, não precisa colocar "+"
    }
   
    getVoltas() { return this.#totalVoltas; }
}
class Equipe { //MAE 
    #nomeEquipe;
    #orcamento;
    constructor(nome, orcamento) {
        this.#nomeEquipe = nome;
        this.#orcamento = orcamento;
    }
    realizarPitStop(custo) {
        this.#orcamento -= custo;
        return `Pit stop da ${this.#nomeEquipe} realizado. Novo orçamento: R$${this.#orcamento}`; //RESUMIR O THIS 
    }
}
class Circuito { //FILHO
    #nomePista;
    constructor(nome) {
        this.#nomePista = nome;
    }

    exibirStatus(piloto) {
        return `Status em ${this.#nomePista}: Piloto ${piloto.getNome()} está na volta ${piloto.getVoltas()}.`;
    }
}

//CRIANDO O OBJETO REAL
const ferrari = new Equipe('Mercedez', 2000000);
const leclerc = new PilotoF1('George', 63);
const monaco = new Circuito('Belgica');

// CONSOLES EXIBEM INFORMAÇÕES
console.log(hamilton.correr(44));         
console.log(ferrari.realizarPitStop(500)); 
console.log(monaco.exibirStatus(hamilton)); 
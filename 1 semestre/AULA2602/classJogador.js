class jogador{
    #nome;
    #numero;
    constructor(nome, numero){
        this.#nome= nome;
        this.#numero= numero;
    }
    treinar(){
        return '3 vezes na semana';
    }
    getNome(){
        return this.#nome;
    }
    getNumero(){
        return this.#numero;
    }
}   
    //class jogadorFutebol{ --filha
        class Jogador extends Jogador{
        #pedominante;
        #totalgols;
        constructor(pedominante, totalgols){
            this.#pedominante= pedominante;
            this.#totalgols= totalgols;
            super(nome,numero);
        }
        driblar(){
            return 'tomou caneta';
        }
        fazergol(qtsgols){
        this.#totalgols+qtsgols;
        }
        mostrar(){
            return '0 jogador' + super.getNome()+ 'numero' + super.getNumero() + 'pé dominante'+ this.#pedominante + 'tem' + this.#totalgols+'gols';
        }
    }
    const Jogador = new Jogador('esquerdo',20, 'Kelvin Destaque', 7);
    jogador.fazergol(2);
    console.log(jogador.mostrar());
    //super acessa atributos da classe mãe
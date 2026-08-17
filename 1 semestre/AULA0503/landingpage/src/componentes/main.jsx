import imgMusculacao from '../assets/img/musculacao.jpg';
import imgCardio from '../assets/img/corrida.jpg';
import imgYoga from '../assets/img/yoga.jpg';


export default function Main(){
    return(
        <main>
            <select id="home">
                <h2>Transfome seu corpo com a <span>FoFitness</span></h2>
                <p>A academia perfeita para quem deseja saúde, diversão e um shape incrível</p>
                <button>Começar Agora</button>
            </select>
            <section id="sobre">
                <h2>Sobre nós</h2>
                <p>Somos uma academia focada em perda de peso com saúde, bem-estar e sem dietas mirabolantes. Nossa lema é "Vem para cá e afine igual um palitinho".</p>
            </section>
            <section id="modalidades">
                <h2>Modalidades</h2>
                <div className="exercicio">
                    <h3>Musculação</h3>
                    <img src={imgMusculacao} alt="" />
                </div>
                <div className="exercicio">
                    <h3>Cardio</h3>
                    <img src={imgCardio} alt="" />
                </div>
                <div className="exercicio">
                    <h3>Yoga</h3>
                    <img src={imgYoga} alt="" />
                </div>
            </section>
            <section>
                <h2>Planos e Preços</h2>
                <div className="tabela-planos">
                    <h3>Básico</h3>
                    <p className="preco">R$79,99/mês</p>
                    <ul>
                        <li>Acesso à musculação</li>
                        <li>Aulas coletivas limitadas</li>
                        <li>Horário Livre</li>
                    </ul>
                </div>
                //
                  <div className="plano destque">
                    <h3>Premium</h3>
                    <p className="preco">R$129,99/mês</p>
                    <ul>
                        <li>Acesso à musculação</li>
                        <li>Personal</li>
                        <li>Yoga e Funcional</li>
                    </ul>
                </div>
                //
                  <div className="plano">
                    <h3>VIP</h3>
                    <p className="preco">R$199,99/mês</p>
                    <ul>
                        <li>Personal exclusivo</li>
                        <li>Nutricionista</li>
                        <li>Acompanhamento mensal</li>
                        <li>Bom dia do atendente</li>
                    </ul>
                </div>
            </section>

                <section id="depoimentos">
                <h2>Experiência dos nossos alunos</h2>
                <div className="depoimento">
                <p>A pior academia de Mirandópolis, passei
                calor e paguei caro</p>
                <span>Pedro Barbosa</span>
                </div>
                <div class="depoimento">
                <p>Professores rudes, estrutura precária</p>
                <span>Emanuelle</span>
            </div>
        </section>
                <section id="contato" className="Contato"></section>
                <h2>Entre em contato</h2>
                <form action="">
                <input type="text" placeholder="Seu nome"/>
                <input type="text" placeholder="Seu email"/>
                <textarea name="" id="" placeholder="Mensagem"></textarea>
                <button type="submit">Enviar</button>
            </form>
        <section/>
    </main>
    )
}

import {Link} from "react-router-dom";
import './sobre.css';

export default function Sobre(){
    return(
        <section className="container">
            <h2 className="titulo">Sobre a sua empresa</h2>
            <p>LALALALALALALALALALALALALALALALALALALALALALALALA</p>
            <Link to='/' className="botao-voltar">Voltar</Link>
        </section>
    )
}
import {useState} from "react";
import {Link} from "react-router-dom"
import "./login.css";


export default function Login(){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    return( 
        <section>
            <div>
                {/* OPCIONAL SE COLOCAR IMAGEM */}
                {/* <div>
                    <img src={imgEstacao} alt="" /> 
                </div> */}
                <div>
                    <h2>⤿ℓo͟gin</h2>
                    <form action="">

                        <label htmlFor="usuario">𔓘Usuário𔓘</label>
                        <input
                            type="text"
                            id="usuario"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}/>
                        <label htmlFor="senha">𔓘Senha𔓘</label>

                        <input
                            type="password"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}/>


                             <Link to='/dashboard' type="submit">Entrar</Link>

                        <p><Link to="/register"
                        className="link-sedondary
                        link-offset-2
                        link-underline-opacity-25
                        link-underline-opacity-100-hover
                        ">Não tem conta? Cadastre-se</Link></p>
                    </form>
                </div>
            </div>
        </section>
    )
}
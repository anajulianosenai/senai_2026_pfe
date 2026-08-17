import {useState} from "react";
import "./register.css";
//import {Link} from "react-router-dom";
//import imgEstacao from '../../assets/estacao.jpg'  //OPCIONAL PARA IMAGEM


export default function Register(){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setconfirmaSenha] = useState('');

    return( 
        <section>
            <div>
                {/* OPCIONAL SE COLOCAR IMAGEM */}
                {/* <div>
                    <img src={imgEstacao} alt="" /> 
                </div> */}
                <div>
                    <h2>⤿𝒞adastro de Usuário</h2>
                    <form>

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


                        <label htmlFor="confsenha">𔓘Confirme a Senha𔓘</label>
                        <input
                            type="password"
                            id="confsenha"
                            value={confirmaSenha}
                            onChange={(e) => setconfirmaSenha(e.target.value)}/>



                        <button to="/home">𝒞adastro</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
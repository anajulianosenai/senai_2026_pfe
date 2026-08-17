import './App.css'
import logSesi from './assets/img/sesi.jpg'; //importando imagens
import logSenai from './assets/img/senai.jpg';


export default function App() {

  return (
    <>
    <div className="container">
    <img src={logSenai} alt="logo do senai" className='Logo'/>
     <img src={logSesi} alt="logo do sesi" className='Logo'/>
     <h1 className="titulo">Login</h1>
     <span className="subtitulo">para continuar</span>
     <label htmlFor="nome" className="label">Nome</label>
     <input type="text" className="campo" id='nome' placeholder='Seu nome'/>
    <label htmlFor='nome' className='label'>senha</label>
    <input type="text" className='campo' id="senha" placeholder='*****'/>
    <button className='botao'>Log in</button>
    <a className='textFooter'>Esqueceu de mim?</a>
    <a className='textFooter'>Cadastre-se</a>
    </div>
    </>

  )
}

//export default App;

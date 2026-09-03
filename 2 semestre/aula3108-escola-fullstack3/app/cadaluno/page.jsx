'use client';
import {useState} from 'react'
import Header from '../components/header'

export default function CadAluno() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [serie, setSerie] = useState('')
    const [ra, setRa] = useState('')

    return (
        <>
        <Header/>
        <h2>Cadastro de Aluno</h2>
        <form action="">
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />

            <label htmlFor="idade">Idade:</label>
            <input type="number" name="idade" id="idade" value={idade} onChange={(e) => setIdade(e.target.value)} />

           <label htmlFor="serie">Série:</label>
            <input type="text" name="serie" id="serie" value={serie} onChange={(e) => setSerie(e.target.value)} />

            <label htmlFor="ra">RA:</label>
            <input type="text" name="ra" id="ra" value={ra} onChange={(e) => setRa(e.target.value)} />

            <button>Cadastrar</button>
        </form>
        </>
    )
}



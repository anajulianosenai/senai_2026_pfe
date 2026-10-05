'use client';
import {useState} from 'react'
import Header from '../components/header'

export default function CadAluno() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [serie, setSerie] = useState('')
    const [ra, setRa] = useState('')

  async function cadastrarAluno(evento) {
        evento.preventDefault();
        const resposta = await fetch("/api/alunos", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({nome, idade, serie, ra})
        })
        const dados = await resposta.json();
        alert (dados.mensagem||dados.erro);
        if(resposta.ok){
            setNome('');
            setIdade('');
            setSerie('');
            setRa('');
        }
    }

    return (
        <>
        <Header/>
        <h2>Cadastro de Aluno</h2>
        <form onSubmit={cadastrarAluno}>

            
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />

            <label htmlFor="idade">Idade:</label>
            <input type="number" name="idade" id="idade" value={idade} onChange={(e) => setIdade(e.target.value)} />

           <label htmlFor="serie">Série:</label>
            <input type="text" name="serie" id="serie" value={serie} onChange={(e) => setSerie(e.target.value)} />

            <label htmlFor="ra">RA:</label>
            <input type="text" name="ra" id="ra" value={ra} onChange={(e) => setRa(e.target.value)} />

            <button type="submit">Cadastrar</button>
        </form>
        </>
    )
}


    
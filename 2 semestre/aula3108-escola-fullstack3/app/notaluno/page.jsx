'use client';
import {useState} from 'react'
import Header from '../components/header'

export default function NotAluno() {
    const [nome, setNome] = useState('')
    const [t1, setT1] = useState('')
    const [t2, setT2] = useState('')
    const [nota1, setNota1] = useState('')
    const [nota2, setNota2] = useState('')
    const [nota3, setNota3] = useState('')

    // ADICIONADO: estado para guardar a média
    const [media, setMedia] = useState('')

    // ADICIONADO: função para calcular a média
    function calcularMedia() {
        const resultado = (
            Number(nota1) +
            Number(nota2) +
            Number(nota3)
        ) / 3

        setMedia(resultado.toFixed(1))
    }

    return (
        <>
        <Header/>
        <h2>Cadastro de Notas</h2>
        <form action="">
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />

            <label htmlFor="t1">Trabalho 1:</label>
            <input type="number" name="t1" id="t1" value={t1} onChange={(e) => setT1(e.target.value)} />

            <label htmlFor="t2">Trabalho 2:</label>
            <input type="number" name="t2" id="t2" value={t2} onChange={(e) => setT2(e.target.value)} />

            <label htmlFor="nota1">Nota 1:</label>
            <input type="number" name="nota1" id="nota1" value={nota1} onChange={(e) => setNota1(e.target.value)} />

            <label htmlFor="nota2">Nota 2:</label>
            <input type="number" name="nota2" id="nota2" value={nota2} onChange={(e) => setNota2(e.target.value)} />

            <label htmlFor="nota3">Nota 3:</label>
            <input type="number" name="nota3" id="nota3" value={nota3} onChange={(e) => setNota3(e.target.value)} />

            {/* ADICIONADO */}
            <button type="button" onClick={calcularMedia}>
                Calcular Média
            </button>

            {/* ADICIONADO */}
            {media && <p>Média: {media}</p>}

            <button>Cadastrar</button>
        </form>
        </>
    )
}
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/header';

export default function ListAluno() {
    const [alunos, setAlunos] = useState([]);
    const router = useRouter();


    async function buscarAlunos(){
    const resposta = await fetch("/api/alunos");
        const dados = await resposta.json();
        setAlunos(dados);
    }

    async function excluirAluno(ra) {
        if (confirm("Deseja mesmo excluir?")) {
            await fetch("/api/alunos", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ra })
            });
            buscarAlunos();
        }
    }


    useEffect(() => {
        buscarAlunos();
    }, [])

    return (
        <>
            <Header />
            <h2>Lista de Alunos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Série</th>
                        <th>RA</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alunos.map((aluno) => {
                            return (
                                <tr key={aluno.id_aluno}>
                                    <td>{aluno.id_aluno}</td>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.idade}</td>
                                    <td>{aluno.serie}</td>
                                    <td>{aluno.ra}</td>
                        <td>
                            <button onClick={() => console.log('Editar aluno')}>
                                Editar
                            </button>
                            <button onClick={() => excluirAluno(aluno.ra)}>
                                Excluir
                            </button>
                        </td>
                    </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}
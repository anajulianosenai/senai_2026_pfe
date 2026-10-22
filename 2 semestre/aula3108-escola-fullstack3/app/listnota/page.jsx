'use client';
import { useState, useEffect } from "react";
import Header from "../components/header";
import styles from './listnota.module.css';
import { useRouter } from "next/navigation";

export default function ListNota() {
    const [notas, setNotas] = useState([]);
    const router = useRouter();

    useEffect(() => {
        buscarNotas()
    }, [])//toda vez que a tela for recarregada

    async function buscarNotas() {
        const resposta = await fetch('/api/notas');
        const dados = await resposta.json();

        setNotas(dados);
    }

    function editarNota(id_nota) {
        router.push(`/editnota/${id_nota}`);
    }

    async function excluirNota(event) {
        event.preventDefault();
        if (!confirm("Deseja realmente excluir esta nota?")) {
            return;
        }
        const resposta = await fetch("/api/notas", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_nota: event.target.dataset.id,
            }),
        });

        const dados = await resposta.json();

        alert(dados.mensagem || dados.erro);

        buscarNotas();
    }



    return (
        <>
            <Header />

            <main className={styles.main}>

                <section className={styles.tituloArea}>
                    <h2>Lista de Notas</h2>

                </section>

                <section className={styles.tabelaContainer}>

                    <table className={styles.tabela}>

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>RA</th>
                                <th>T1</th>
                                <th>T2</th>
                                <th>N1</th>
                                <th>N2</th>
                                <th>N3</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {notas ? (notas.map((nota) => (
                                <tr key={nota.id_nota}>
                                    <td>{nota.id_nota}</td>
                                    <td>{nota.nome}</td>
                                    <td>{nota.ra}</td>
                                    <td>{nota.t1}</td>
                                    <td>{nota.t2}</td>
                                    <td>{nota.n1}</td>
                                    <td>{nota.n2}</td>
                                    <td>{nota.n3}</td>

                                    <td>
                                        <button className={styles.botaoEditar} onClick={() => editarNota(nota.id_nota)}>
                                            Editar
                                        </button>

                                        <button className={styles.botaoExcluir} data-id={nota.id_nota} onClick={excluirNota}>
                                            Excluir
                                        </button>
                                    </td>

                                </tr>
                            ))) : (
                                <tr>
                                    <td colSpan="6">Nenhuma nota encontrada.</td>
                                </tr>
                            )}
                        </tbody>

                    </table>

                </section>

            </main>
        </>
    );
}
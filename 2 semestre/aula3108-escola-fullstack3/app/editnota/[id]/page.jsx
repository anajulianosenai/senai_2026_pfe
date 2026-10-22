'use client';

import { useEffect, useState, use } from "react";
import Header from "../../components/header";
import styles from "./notaluno.module.css"; 
import { useRouter, useParams, useSearchParams } from "next/navigation";

export default function EditNotaPage({ params: paramsPromise }) {
    const router = useRouter();
    const routeParams = useParams();
    const searchParams = useSearchParams();

    const resolvedParams = paramsPromise ? use(paramsPromise) : null;
    
   
    const id = resolvedParams?.id || resolvedParams?.id_nota || 
               routeParams?.id || routeParams?.id_nota || 
               searchParams?.get("id") || searchParams?.get("id_nota");

    const [id_nota, setIdNota] = useState("");
    const [id_aluno, setIdAluno] = useState("");
    const [t1, setT1] = useState("");
    const [t2, setT2] = useState("");
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [n3, setN3] = useState("");
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        if (id) {
            buscarNota(id);
        } else {
            setCarregando(false);
        }
    }, [id]);

    async function buscarNota(idNota) {
        try {
            setCarregando(true);
            const respuesta = await fetch(`/api/notas/${idNota}`);

            if (!respuesta.ok) {
                alert("Nota não encontrada!");
                router.push("/listnota");
                return;
            }

            const dados = await respuesta.json();
            
            setIdNota(dados.id_nota || "");
            setIdAluno(dados.id_aluno || "");
            setT1(dados.t1 || "");
            setT2(dados.t2 || "");
            setN1(dados.n1 || "");
            setN2(dados.n2 || "");
            setN3(dados.n3 || "");
        } catch (erro) {
            console.error("Erro ao carregar nota:", erro);
            alert("Erro ao carregar dados da nota.");
        } finally {
            setCarregando(false);
        }
    }

    async function editarNota(event) {
        event.preventDefault();

        if (!id) {
            alert("ID da nota não foi encontrado.");
            return;
        }

        const resposta = await fetch("/api/notas", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_nota,
                id_aluno,
                t1,
                t2,
                n1,
                n2,
                n3,
            }),
        });

        const dados = await resposta.json();
        alert(dados.mensagem || dados.erro);

        if (resposta.ok) {
            router.push("/listnota");
        }
    }

    if (carregando) {
        return (
            <main className="container">
                <h1>Editar Nota</h1>
                <p>Carregando informações da nota...</p>
            </main>
        );
    }

    return (
        <>
            <Header />

            <main className={styles.container}>
                <div className={styles.card}>
                    <h2 className={styles.title}>
                        Edição de Notas
                    </h2>

                    <form className={styles.form} onSubmit={editarNota}>
                        <input type="text" value={id_nota} onChange={(event) => setIdNota(event.target.value)} hidden/>

                        <div className={styles.inputGroup}>
                            <label htmlFor="id_aluno">ID do Aluno</label>
                            <input
                                id="id_aluno"
                                type="text"
                                value={id_aluno}
                                disabled // Bloqueado para não alterar o aluno da nota por engano
                                className={styles.disabledInput}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="trabalho1">Trabalho 1</label>
                            <input
                                id="trabalho1"
                                type="text"
                                value={t1}
                                onChange={(e) => setT1(e.target.value)}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="trabalho2">Trabalho 2</label>
                            <input
                                id="trabalho2"
                                type="text"
                                value={t2}
                                onChange={(e) => setT2(e.target.value)}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="nota1">Nota 1</label>
                            <input
                                id="nota1"
                                type="number"
                                value={n1}
                                onChange={(e) => setN1(e.target.value)}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="nota2">Nota 2</label>
                            <input
                                id="nota2"
                                type="number"
                                value={n2}
                                onChange={(e) => setN2(e.target.value)}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="nota3">Nota 3</label>
                            <input
                                id="nota3"
                                type="number"
                                value={n3}
                                onChange={(e) => setN3(e.target.value)}
                            />
                        </div>

                        <button className={styles.button} type="submit">
                            Editar Nota
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}
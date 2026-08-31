'use client';

import { useState, useEffect } from 'react';
import Header from "../components/header";
import { getAlunos, getNotas } from "../components/storage";
import Link from "next/link";

const FRASES_KAWAII = [
  "Estudar com amor faz o futuro brilhar como uma estrela! ✨",
  "Aprender é superfofo e nos leva longe! 🎀",
  "Cada novo conhecimento é uma conquista mágica! 🌸",
  "Com dedicação e carinho, todo objetivo fica fofo e alcançável! 💖",
  "A amizade e a educação transformam o mundo em um lugar mais doce! 🍭",
  "Você é capaz de aprender tudo o que desejar com a Hello Kitty! 🎀"
];

export default function Home() {
  const [alunosCount, setAlunosCount] = useState(0);
  const [notasCount, setNotasCount] = useState(0);
  const [mediaGeral, setMediaGeral] = useState('0.0');
  const [taxaAprovacao, setTaxaAprovacao] = useState(0);
  const [fraseIndice, setFraseIndice] = useState(0);

  useEffect(() => {
    const listAlunos = getAlunos();
    const listNotas = getNotas();
    setAlunosCount(listAlunos.length);
    setNotasCount(listNotas.length);

    if (listNotas.length > 0) {
      const soma = listNotas.reduce((acc, curr) => acc + curr.media, 0);
      setMediaGeral((soma / listNotas.length).toFixed(1));

      const aprovados = listNotas.filter(n => n.situacao === 'Aprovado').length;
      setTaxaAprovacao(Math.round((aprovados / listNotas.length) * 100));
    }
  }, []);

  const novaFrase = () => {
    setFraseIndice((prev) => (prev + 1) % FRASES_KAWAII.length);
  };

  return (
    <div>
      <Header />
      <main className="container">
        {/* Banner Hero Hello Kitty */}
        <div className="card" style={{ background: 'linear-gradient(135deg, #fff0f5 0%, #ffeaf2 100%)', textAlign: 'center', padding: '2.5rem 1.5rem' }}>
          <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '0.5rem' }}>🎀 🐱 💖</span>
          <h1 style={{ fontSize: '2.2rem', color: '#ff4d8d', marginBottom: '0.8rem' }}>
            Bem-vindo ao Portal da Escola Sesi!
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#8c5b73', maxWidth: '700px', margin: '0 auto 1.5rem auto' }}>
            O portal mais fofo e encantador para gerenciamento de estudantes, turmas, cadastro de notas e boletins acadêmicos!
          </p>

          <div style={{ background: '#ffffff', border: '2px dashed #ffb8d2', borderRadius: '20px', padding: '1rem 1.5rem', display: 'inline-block', maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ fontWeight: '600', color: '#ff2a5f', fontSize: '1rem' }}>
              "{FRASES_KAWAII[fraseIndice]}"
            </p>
            <button onClick={novaFrase} className="btn btn-secondary" style={{ marginTop: '0.8rem', padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
              ✨ Ver outra frase fofa
            </button>
          </div>
        </div>

        {/* Estatísticas Rápidas */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total de Alunos 👥</h3>
            <p className="stat-number">{alunosCount}</p>
          </div>
          <div className="stat-card stat-success">
            <h3>Média Geral 📈</h3>
            <p className="stat-number">{mediaGeral}</p>
          </div>
          <div className="stat-card stat-success">
            <h3>Taxa de Aprovação 🌟</h3>
            <p className="stat-number">{taxaAprovacao}%</p>
          </div>
          <div className="stat-card">
            <h3>Boletins Lançados 📝</h3>
            <p className="stat-number">{notasCount}</p>
          </div>
        </div>

        {/* Módulos e Atalhos Rápidos */}
        <div className="card">
          <div className="card-header">
            <h2>Módulos do Sistema Hello Kitty</h2>
            <p>Selecione uma das opções abaixo para acessar os cadastros e consultas.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <Link href="/cadaaluno" className="stat-card" style={{ cursor: 'pointer', textAlign: 'center' }}>
              <span style={{ fontSize: '2.5rem' }}>📝</span>
              <h3 style={{ color: '#ff4d8d', fontSize: '1.2rem', marginTop: '0.5rem' }}>Cadastrar Aluno</h3>
              <p style={{ color: '#8c5b73', fontSize: '0.9rem' }}>Adicione novos alunos à escola kawaii.</p>
            </Link>

            <Link href="/listaaluno" className="stat-card" style={{ cursor: 'pointer', textAlign: 'center' }}>
              <span style={{ fontSize: '2.5rem' }}>📋</span>
              <h3 style={{ color: '#ff4d8d', fontSize: '1.2rem', marginTop: '0.5rem' }}>Lista de Alunos</h3>
              <p style={{ color: '#8c5b73', fontSize: '0.9rem' }}>Consulte e gerencie os estudantes matriculados.</p>
            </Link>

            <Link href="/notaaluno" className="stat-card" style={{ cursor: 'pointer', textAlign: 'center' }}>
              <span style={{ fontSize: '2.5rem' }}>🎀</span>
              <h3 style={{ color: '#ff4d8d', fontSize: '1.2rem', marginTop: '0.5rem' }}>Lançar Notas</h3>
              <p style={{ color: '#8c5b73', fontSize: '0.9rem' }}>Registre as notas das avaliações por disciplina.</p>
            </Link>

            <Link href="/listanota" className="stat-card" style={{ cursor: 'pointer', textAlign: 'center' }}>
              <span style={{ fontSize: '2.5rem' }}>📊</span>
              <h3 style={{ color: '#ff4d8d', fontSize: '1.2rem', marginTop: '0.5rem' }}>Boletim de Notas</h3>
              <p style={{ color: '#8c5b73', fontSize: '0.9rem' }}>Veja as médias, médias gerais e aprovações.</p>
            </Link>

            <Link href="/ranking" className="stat-card" style={{ cursor: 'pointer', textAlign: 'center' }}>
              <span style={{ fontSize: '2.5rem' }}>🏆</span>
              <h3 style={{ color: '#ff4d8d', fontSize: '1.2rem', marginTop: '0.5rem' }}>Quadro de Honra</h3>
              <p style={{ color: '#8c5b73', fontSize: '0.9rem' }}>Veja o ranking dos melhores alunos da escola!</p>
            </Link>

            <Link href="/certificados" className="stat-card" style={{ cursor: 'pointer', textAlign: 'center' }}>
              <span style={{ fontSize: '2.5rem' }}>📜</span>
              <h3 style={{ color: '#ff4d8d', fontSize: '1.2rem', marginTop: '0.5rem' }}>Certificados</h3>
              <p style={{ color: '#8c5b73', fontSize: '0.9rem' }}>Gere certificados fofos e imprimíveis.</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

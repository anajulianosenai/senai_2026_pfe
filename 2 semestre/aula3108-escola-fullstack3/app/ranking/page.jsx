'use client';

import { useState, useEffect } from 'react';
import Header from '../components/header';
import { getNotas } from '../components/storage';
import Link from 'next/link';

export default function RankingPage() {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const notasList = getNotas();

    // Group grades by student name and compute overall student average
    const studentMap = {};
    notasList.forEach(n => {
      if (!studentMap[n.alunoNome]) {
        studentMap[n.alunoNome] = { nome: n.alunoNome, soma: 0, count: 0, disciplinas: [] };
      }
      studentMap[n.alunoNome].soma += n.media;
      studentMap[n.alunoNome].count += 1;
      studentMap[n.alunoNome].disciplinas.push(`${n.disciplina} (${n.media.toFixed(1)})`);
    });

    const studentList = Object.values(studentMap).map(s => ({
      nome: s.nome,
      mediaGeral: parseFloat((s.soma / s.count).toFixed(1)),
      totalDisciplinas: s.count,
      disciplinas: s.disciplinas
    }));

    // Sort by mediaGeral descending
    studentList.sort((a, b) => b.mediaGeral - a.mediaGeral);
    setRanking(studentList);
  }, []);

  const getMedal = (index) => {
    if (index === 0) return "🥇 1º Lugar (Medalha de Ouro Hello Kitty)";
    if (index === 1) return "🥈 2º Lugar (Medalha de Prata)";
    if (index === 2) return "🥉 3º Lugar (Medalha de Bronze)";
    return `✨ ${index + 1}º Lugar`;
  };

  return (
    <div>
      <Header />
      <main className="container">
        <div className="card" style={{ background: 'linear-gradient(135deg, #fff0f5 0%, #ffeaf2 100%)', textAlign: 'center' }}>
          <span style={{ fontSize: '3rem' }}>🏆 🎀 🌟</span>
          <h1 style={{ color: '#ff4d8d', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            Quadro de Honra Hello Kitty Academy
          </h1>
          <p style={{ color: '#8c5b73', fontSize: '1rem', maxWidth: '650px', margin: '0 auto' }}>
            Reconhecimento dos alunos mais dedicados e exemplares do nosso portal kawaii!
          </p>
        </div>

        <div className="card">
          <div className="card-header-flex">
            <div>
              <h2>Ranking de Desempenho Geral</h2>
              <p>Ordenado pelas maiores médias obtidas no boletim acadêmico.</p>
            </div>
            <Link href="/certificados" className="btn btn-primary">
              📜 Emitir Certificado de Honra
            </Link>
          </div>

          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Posição</th>
                  <th>Estudante</th>
                  <th>Disciplinas Cursadas</th>
                  <th>Média Geral</th>
                  <th>Status de Honra</th>
                </tr>
              </thead>
              <tbody>
                {ranking.length > 0 ? (
                  ranking.map((aluno, index) => (
                    <tr key={index} style={{ background: index === 0 ? '#fff5f8' : 'inherit' }}>
                      <td className="font-bold">
                        {getMedal(index)}
                      </td>
                      <td style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ff4d8d' }}>
                        🐱 {aluno.nome}
                      </td>
                      <td style={{ fontSize: '0.88rem', color: '#6b3b52' }}>
                        {aluno.disciplinas.join(', ')}
                      </td>
                      <td>
                        <strong className="code-tag" style={{ fontSize: '1.1rem', background: '#ffd6e5' }}>
                          {aluno.mediaGeral.toFixed(1)}
                        </strong>
                      </td>
                      <td>
                        <span className={`badge ${aluno.mediaGeral >= 9.0 ? 'badge-success' : aluno.mediaGeral >= 7.0 ? 'badge-warning' : 'badge-danger'}`}>
                          {aluno.mediaGeral >= 9.0 ? '🌟 Aluno Estrela' : aluno.mediaGeral >= 7.0 ? '🎀 Aprovado' : '📚 Em Progresso'}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center empty-state">
                      Nenhum dado de notas disponível para gerar o ranking. 😿
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

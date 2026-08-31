'use client';

import { useState, useEffect } from 'react';
import Header from '../components/header';
import { getNotas, deleteNota, updateNota } from '../components/storage';
import Link from 'next/link';

export default function ListaNotas() {
  const [notas, setNotas] = useState([]);
  const [busca, setBusca] = useState('');
  const [filtroDisciplina, setFiltroDisciplina] = useState('Todas');
  const [filtroSituacao, setFiltroSituacao] = useState('Todas');
  const [ordenacao, setOrdenacao] = useState('padrao'); // 'padrao', 'maior_media', 'menor_media'
  const [mensagem, setMensagem] = useState('');
  const [editingNota, setEditingNota] = useState(null);

  useEffect(() => {
    setNotas(getNotas());
  }, []);

  const handleDelete = (id, alunoNome, disciplina) => {
    if (confirm(`Deseja remover as notas de ${alunoNome} na disciplina ${disciplina}?`)) {
      const updated = deleteNota(id);
      setNotas(updated);
      setMensagem('Registro de notas removido com sucesso.');
      setTimeout(() => setMensagem(''), 3000);
    }
  };

  const handleOpenEdit = (item) => {
    setEditingNota({ ...item });
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!editingNota) return;

    const updated = updateNota(editingNota.id, {
      nota1: editingNota.nota1,
      nota2: editingNota.nota2,
      nota3: editingNota.nota3,
      disciplina: editingNota.disciplina
    });

    setNotas(updated);
    setEditingNota(null);
    setMensagem('Notas atualizadas com sucesso! 🎀');
    setTimeout(() => setMensagem(''), 3000);
  };

  const handleExportCSV = () => {
    if (notas.length === 0) return alert('Nenhuma nota para exportar.');
    let csvContent = "data:text/csv;charset=utf-8,Aluno,Disciplina,Nota1,Nota2,Nota3,Media,Situacao\n";
    notas.forEach(n => {
      csvContent += `"${n.alunoNome}","${n.disciplina}",${n.nota1},${n.nota2},${n.nota3},${n.media},"${n.situacao}"\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `boletim_hello_kitty_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  let notasFiltradas = notas.filter(item => {
    const matchesBusca = item.alunoNome.toLowerCase().includes(busca.toLowerCase());
    const matchesDisc = filtroDisciplina === 'Todas' || item.disciplina === filtroDisciplina;
    const matchesSit = filtroSituacao === 'Todas' || item.situacao === filtroSituacao;
    return matchesBusca && matchesDisc && matchesSit;
  });

  if (ordenacao === 'maior_media') {
    notasFiltradas.sort((a, b) => b.media - a.media);
  } else if (ordenacao === 'menor_media') {
    notasFiltradas.sort((a, b) => a.media - b.media);
  }

  const mediaGeral = notas.length > 0
    ? (notas.reduce((acc, curr) => acc + curr.media, 0) / notas.length).toFixed(1)
    : '0.0';

  const aprovados = notas.filter(n => n.situacao === 'Aprovado').length;
  const taxaAprovacao = notas.length > 0
    ? Math.round((aprovados / notas.length) * 100)
    : 0;

  return (
    <div>
      <Header />
      <main className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Média Geral da Escola 📈</h3>
            <p className="stat-number">{mediaGeral}</p>
          </div>
          <div className="stat-card stat-success">
            <h3>Taxa de Aprovação 🎀</h3>
            <p className="stat-number">{taxaAprovacao}%</p>
          </div>
          <div className="stat-card">
            <h3>Total de Lançamentos 📝</h3>
            <p className="stat-number">{notas.length}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header-flex">
            <div>
              <h2>Boletim de Notas e Desempenho</h2>
              <p>Consulte as notas e a situação dos alunos por disciplina na Hello Kitty Academy.</p>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button onClick={handleExportCSV} className="btn btn-secondary">
                📥 Baixar Boletim CSV
              </button>
              <Link href="/notaaluno" className="btn btn-primary">
                + Lançar Novas Notas
              </Link>
            </div>
          </div>

          {mensagem && <div className="alert alert-success">{mensagem}</div>}

          <div className="filters-grid">
            <input
              type="text"
              placeholder="🔍 Buscar aluno pelo nome..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="filter-input"
            />

            <select
              value={filtroDisciplina}
              onChange={(e) => setFiltroDisciplina(e.target.value)}
              className="filter-select"
            >
              <option value="Todas">Todas as Disciplinas</option>
              <option value="Programação Front-End">Programação Front-End</option>
              <option value="Design UX/UI">Design UX/UI</option>
              <option value="Banco de Dados">Banco de Dados</option>
              <option value="Lógica de Programação">Lógica de Programação</option>
              <option value="Engenharia de Software">Engenharia de Software</option>
            </select>

            <select
              value={filtroSituacao}
              onChange={(e) => setFiltroSituacao(e.target.value)}
              className="filter-select"
            >
              <option value="Todas">Todas as Situações</option>
              <option value="Aprovado">Aprovado</option>
              <option value="Recuperação">Recuperação</option>
              <option value="Reprovado">Reprovado</option>
            </select>

            <select
              value={ordenacao}
              onChange={(e) => setOrdenacao(e.target.value)}
              className="filter-select"
            >
              <option value="padrao">Ordenar por: Padrão</option>
              <option value="maior_media">Maior Média ⬆️</option>
              <option value="menor_media">Menor Média ⬇️</option>
            </select>
          </div>

          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Aluno</th>
                  <th>Disciplina</th>
                  <th>Nota 1</th>
                  <th>Nota 2</th>
                  <th>Nota 3</th>
                  <th>Média Final</th>
                  <th>Situação</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {notasFiltradas.length > 0 ? (
                  notasFiltradas.map((item) => (
                    <tr key={item.id}>
                      <td className="font-bold">
                        {item.media >= 9.0 && <span title="Aluno Destaque Kawaii!">🌟 </span>}
                        {item.alunoNome}
                      </td>
                      <td>{item.disciplina}</td>
                      <td>{item.nota1.toFixed(1)}</td>
                      <td>{item.nota2.toFixed(1)}</td>
                      <td>{item.nota3.toFixed(1)}</td>
                      <td>
                        <strong className="code-tag">{item.media.toFixed(1)}</strong>
                      </td>
                      <td>
                        <span className={`badge ${
                          item.situacao === 'Aprovado'
                            ? 'badge-success'
                            : item.situacao === 'Recuperação'
                            ? 'badge-warning'
                            : 'badge-danger'
                        }`}>
                          {item.situacao}
                        </span>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <button
                            onClick={() => handleOpenEdit(item)}
                            className="btn btn-secondary"
                            style={{ padding: '0.3rem 0.7rem', fontSize: '0.8rem' }}
                            title="Editar notas"
                          >
                            ✏️ Editar
                          </button>
                          <button
                            onClick={() => handleDelete(item.id, item.alunoNome, item.disciplina)}
                            className="btn-danger-sm"
                            title="Excluir notas"
                          >
                            Excluir
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center empty-state">
                      Nenhum lançamento de nota encontrado com os filtros selecionados. 😿
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal de Edição de Nota */}
        {editingNota && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Editar Boletim de {editingNota.alunoNome} 🎀</h3>
                <button className="close-btn" onClick={() => setEditingNota(null)}>×</button>
              </div>

              <form onSubmit={handleSaveEdit} className="form-grid">
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label>Disciplina</label>
                  <select
                    value={editingNota.disciplina}
                    onChange={(e) => setEditingNota({ ...editingNota, disciplina: e.target.value })}
                  >
                    <option value="Programação Front-End">Programação Front-End</option>
                    <option value="Design UX/UI">Design UX/UI</option>
                    <option value="Banco de Dados">Banco de Dados</option>
                    <option value="Lógica de Programação">Lógica de Programação</option>
                    <option value="Engenharia de Software">Engenharia de Software</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Nota 1</label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={editingNota.nota1}
                    onChange={(e) => setEditingNota({ ...editingNota, nota1: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Nota 2</label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={editingNota.nota2}
                    onChange={(e) => setEditingNota({ ...editingNota, nota2: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Nota 3</label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={editingNota.nota3}
                    onChange={(e) => setEditingNota({ ...editingNota, nota3: e.target.value })}
                    required
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    💾 Salvar Alterações
                  </button>
                  <button type="button" onClick={() => setEditingNota(null)} className="btn btn-secondary">
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}


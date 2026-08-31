'use client';

import { useState, useEffect } from 'react';
import Header from '../components/header';
import { getAlunos, deleteAluno, updateAluno } from '../components/storage';
import Link from 'next/link';

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [busca, setBusca] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [editingAluno, setEditingAluno] = useState(null);

  useEffect(() => {
    setAlunos(getAlunos());
  }, []);

  const handleDelete = (id, nome) => {
    if (confirm(`Deseja realmente remover o aluno ${nome}?`)) {
      const updated = deleteAluno(id);
      setAlunos(updated);
      setMensagem(`Aluno ${nome} removido com sucesso.`);
      setTimeout(() => setMensagem(''), 3000);
    }
  };

  const handleToggleStatus = (aluno) => {
    const newStatus = aluno.status === 'Ativo' ? 'Inativo' : 'Ativo';
    const updated = updateAluno(aluno.id, { status: newStatus });
    setAlunos(updated);
    setMensagem(`Status do aluno ${aluno.nome} alterado para ${newStatus}. ✨`);
    setTimeout(() => setMensagem(''), 3000);
  };

  const handleOpenEdit = (aluno) => {
    setEditingAluno({ ...aluno });
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!editingAluno.nome || !editingAluno.email) return;

    const updated = updateAluno(editingAluno.id, {
      nome: editingAluno.nome,
      email: editingAluno.email,
      curso: editingAluno.curso,
      status: editingAluno.status
    });
    setAlunos(updated);
    setEditingAluno(null);
    setMensagem('Dados do aluno atualizados com sucesso! 🎀');
    setTimeout(() => setMensagem(''), 3000);
  };

  const handleExportCSV = () => {
    if (alunos.length === 0) return alert('Nenhum aluno para exportar.');
    let csvContent = "data:text/csv;charset=utf-8,Matricula,Nome,Email,Curso,Status\n";
    alunos.forEach(a => {
      csvContent += `"${a.matricula}","${a.nome}","${a.email}","${a.curso}","${a.status}"\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `alunos_hello_kitty_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const alunosFiltrados = (Array.isArray(alunos) ? alunos : []).filter(aluno => {
    if (!aluno) return false;
    const nome = (aluno.nome || '').toLowerCase();
    const matricula = (aluno.matricula || '').toLowerCase();
    const curso = (aluno.curso || '').toLowerCase();
    const q = (busca || '').toLowerCase();
    return nome.includes(q) || matricula.includes(q) || curso.includes(q);
  });

  const totalAtivos = (Array.isArray(alunos) ? alunos : []).filter(a => a && a.status === 'Ativo').length;
  const totalInativos = (Array.isArray(alunos) ? alunos : []).filter(a => a && a.status === 'Inativo').length;


  return (
    <div>
      <Header />
      <main className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total de Alunos 👥</h3>
            <p className="stat-number">{alunos.length}</p>
          </div>
          <div className="stat-card stat-success">
            <h3>Alunos Ativos 🟢</h3>
            <p className="stat-number">{totalAtivos}</p>
          </div>
          <div className="stat-card stat-warning">
            <h3>Alunos Inativos 🔴</h3>
            <p className="stat-number">{totalInativos}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header-flex">
            <div>
              <h2>Lista de Alunos Matriculados</h2>
              <p>Gerencie todos os estudantes matriculados no sistema Hello Kitty.</p>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button onClick={handleExportCSV} className="btn btn-secondary">
                📥 Baixar CSV
              </button>
              <Link href="/cadaaluno" className="btn btn-primary">
                + Cadastrar Aluno
              </Link>
            </div>
          </div>

          {mensagem && <div className="alert alert-success">{mensagem}</div>}

          <div className="search-bar">
            <input
              type="text"
              placeholder="🔍 Buscar por nome, matrícula ou curso..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Matrícula</th>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Curso / Turma</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {alunosFiltrados.length > 0 ? (
                  alunosFiltrados.map((aluno) => (
                    <tr key={aluno.id}>
                      <td><code className="code-tag">{aluno.matricula || '---'}</code></td>
                      <td className="font-bold">
                        <span style={{ marginRight: '6px' }}>🐱</span>
                        {aluno.nome || 'Sem Nome'}
                      </td>
                      <td>{aluno.email || '---'}</td>
                      <td>{aluno.curso || '---'}</td>
                      <td>
                        <button
                          onClick={() => handleToggleStatus(aluno)}
                          className={`badge ${aluno.status === 'Ativo' ? 'badge-success' : 'badge-danger'}`}
                          style={{ border: 'none', cursor: 'pointer' }}
                          title="Clique para alternar o status"
                        >
                          {aluno.status || 'Ativo'} 🔄
                        </button>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                          <button
                            onClick={() => handleOpenEdit(aluno)}
                            className="btn btn-secondary"
                            style={{ padding: '0.3rem 0.7rem', fontSize: '0.8rem' }}
                            title="Editar aluno"
                          >
                            ✏️ Editar
                          </button>
                          <Link
                            href={`/notaaluno?aluno=${encodeURIComponent(aluno.nome || '')}`}
                            className="btn btn-secondary"
                            style={{ padding: '0.3rem 0.7rem', fontSize: '0.8rem' }}
                            title="Lançar notas para este aluno"
                          >
                            📝 Notas
                          </Link>
                          <button
                            onClick={() => handleDelete(aluno.id, aluno.nome)}
                            className="btn-danger-sm"
                            title="Excluir aluno"
                          >
                            Excluir
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center empty-state">
                      Nenhum aluno encontrado. 😿
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal de Edição de Aluno */}
        {editingAluno && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Editar Estudante 🎀</h3>
                <button className="close-btn" onClick={() => setEditingAluno(null)}>×</button>
              </div>

              <form onSubmit={handleSaveEdit} className="form-grid">
                <div className="form-group">
                  <label>Nome Completo</label>
                  <input
                    type="text"
                    value={editingAluno.nome || ''}
                    onChange={(e) => setEditingAluno({ ...editingAluno, nome: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>E-mail</label>
                  <input
                    type="email"
                    value={editingAluno.email || ''}
                    onChange={(e) => setEditingAluno({ ...editingAluno, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Curso / Turma</label>
                  <select
                    value={editingAluno.curso || 'Desenvolvimento Fullstack'}
                    onChange={(e) => setEditingAluno({ ...editingAluno, curso: e.target.value })}
                  >
                    <option value="Desenvolvimento Fullstack">Desenvolvimento Fullstack</option>
                    <option value="Design UX/UI">Design UX/UI</option>
                    <option value="Administração">Administração</option>
                    <option value="Redes de Computadores">Redes de Computadores</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Status</label>
                  <select
                    value={editingAluno.status || 'Ativo'}
                    onChange={(e) => setEditingAluno({ ...editingAluno, status: e.target.value })}
                  >
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                  </select>
                </div>


                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    💾 Salvar Alterações
                  </button>
                  <button type="button" onClick={() => setEditingAluno(null)} className="btn btn-secondary">
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


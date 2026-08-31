'use client';

import { useState, useEffect } from 'react';
import Header from '../components/header';
import { getAlunos, saveNota } from '../components/storage';
import Link from 'next/link';

export default function CadastroNota() {
  const [alunos, setAlunos] = useState([]);
  const [formData, setFormData] = useState({
    alunoNome: '',
    disciplina: 'Programação Front-End',
    nota1: '',
    nota2: '',
    nota3: ''
  });

  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const list = getAlunos();
    setAlunos(list);

    // Read query parameter if redirected from student list page
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const alunoParam = params.get('aluno');
      if (alunoParam) {
        setFormData(prev => ({ ...prev, alunoNome: alunoParam }));
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFillMaxGrades = () => {
    setFormData(prev => ({
      ...prev,
      nota1: '10.0',
      nota2: '9.5',
      nota3: '10.0'
    }));
    setMensagem('Notas máximas Hello Kitty preenchidas! ✨🌟');
    setTimeout(() => setMensagem(''), 3000);
  };

  const n1 = parseFloat(formData.nota1) || 0;
  const n2 = parseFloat(formData.nota2) || 0;
  const n3 = parseFloat(formData.nota3) || 0;
  const mediaCalculada = formData.nota1 !== '' && formData.nota2 !== '' && formData.nota3 !== ''
    ? ((n1 + n2 + n3) / 3).toFixed(1)
    : null;

  let situacao = null;
  if (mediaCalculada !== null) {
    const m = parseFloat(mediaCalculada);
    if (m >= 7.0) situacao = { text: 'Aprovado 🎀', class: 'badge-success' };
    else if (m >= 5.0) situacao = { text: 'Recuperação ⚠️', class: 'badge-warning' };
    else situacao = { text: 'Reprovado 😿', class: 'badge-danger' };
  }

  // Simulator: What score is needed on Nota 3 to achieve 7.0 (Pass)?
  let nota3Necessaria = null;
  if (formData.nota1 !== '' && formData.nota2 !== '' && formData.nota3 === '') {
    // (n1 + n2 + n3) / 3 = 7.0  => n3 = 21.0 - (n1 + n2)
    const nec = 21.0 - (n1 + n2);
    nota3Necessaria = nec <= 0 ? 0 : nec > 10 ? 'Mais que 10.0' : nec.toFixed(1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.alunoNome.trim()) {
      setMensagem('Por favor, digite o nome do aluno.');
      return;
    }

    if (formData.nota1 === '' || formData.nota2 === '' || formData.nota3 === '') {
      setMensagem('Preencha as três notas.');
      return;
    }

    saveNota({
      alunoNome: formData.alunoNome.trim(),
      disciplina: formData.disciplina,
      nota1: formData.nota1,
      nota2: formData.nota2,
      nota3: formData.nota3
    });

    setMensagem(`Notas da disciplina ${formData.disciplina} salvas com sucesso para ${formData.alunoNome.trim()}! 🎀`);
    setFormData({
      alunoNome: '',
      disciplina: 'Programação Front-End',
      nota1: '',
      nota2: '',
      nota3: ''
    });

    setTimeout(() => setMensagem(''), 4000);
  };

  return (
    <div>
      <Header />
      <main className="container">
        <div className="card">
          <div className="card-header-flex">
            <div>
              <h2>Lançamento de Notas</h2>
              <p>Digite o nome do aluno e registre os resultados por disciplina na Hello Kitty Academy.</p>
            </div>
            <button type="button" onClick={handleFillMaxGrades} className="btn btn-secondary">
              ✨ Preencher Notas 10.0 Kawaii
            </button>
          </div>

          {mensagem && (
            <div className={`alert ${mensagem.includes('salvas') || mensagem.includes('Notas máximas') ? 'alert-success' : 'alert-error'}`}>
              {mensagem}
            </div>
          )}

          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-group">
              <label htmlFor="alunoNome">Nome do Aluno *</label>
              <input
                type="text"
                id="alunoNome"
                name="alunoNome"
                value={formData.alunoNome}
                onChange={handleChange}
                placeholder="Digite o nome do aluno (ex: Ana Silva)"
                list="lista-alunos-sugestoes"
                required
              />
              {alunos.length > 0 && (
                <datalist id="lista-alunos-sugestoes">
                  {alunos.map(aluno => (
                    <option key={aluno.id} value={aluno.nome} />
                  ))}
                </datalist>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="disciplina">Disciplina *</label>
              <select
                id="disciplina"
                name="disciplina"
                value={formData.disciplina}
                onChange={handleChange}
                required
              >
                <option value="Programação Front-End">Programação Front-End</option>
                <option value="Design UX/UI">Design UX/UI</option>
                <option value="Banco de Dados">Banco de Dados</option>
                <option value="Lógica de Programação">Lógica de Programação</option>
                <option value="Engenharia de Software">Engenharia de Software</option>
              </select>
            </div>

            <div className="notes-row">
              <div className="form-group">
                <label htmlFor="nota1">Nota 1 (0-10) *</label>
                <input
                  type="number"
                  id="nota1"
                  name="nota1"
                  min="0"
                  max="10"
                  step="0.1"
                  value={formData.nota1}
                  onChange={handleChange}
                  placeholder="Ex: 8.5"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="nota2">Nota 2 (0-10) *</label>
                <input
                  type="number"
                  id="nota2"
                  name="nota2"
                  min="0"
                  max="10"
                  step="0.1"
                  value={formData.nota2}
                  onChange={handleChange}
                  placeholder="Ex: 7.0"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="nota3">Nota 3 (0-10) *</label>
                <input
                  type="number"
                  id="nota3"
                  name="nota3"
                  min="0"
                  max="10"
                  step="0.1"
                  value={formData.nota3}
                  onChange={handleChange}
                  placeholder="Ex: 9.0"
                  required
                />
              </div>
            </div>

            {/* Simulador de Nota Necessária */}
            {nota3Necessaria !== null && (
              <div className="media-preview-box" style={{ background: '#fffde7', borderColor: '#ffd54f' }}>
                <div>
                  <span style={{ color: '#f57f17', fontWeight: '600' }}>🎯 Simulador de Aprovação: </span>
                  <span>Nota 3 mínima para atingir média 7.0: </span>
                  <strong style={{ fontSize: '1.3rem', color: '#e65100', marginLeft: '6px' }}>{nota3Necessaria}</strong>
                </div>
              </div>
            )}

            {mediaCalculada !== null && (
              <div className="media-preview-box">
                <div>
                  <span>Média Calculada: </span>
                  <strong className="media-value">{mediaCalculada}</strong>
                </div>
                {situacao && (
                  <div>
                    <span>Situação Estimada: </span>
                    <span className={`badge ${situacao.class}`}>{situacao.text}</span>
                  </div>
                )}
              </div>
            )}

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                🎀 Salvar Notas
              </button>
              <Link href="/listanota" className="btn btn-secondary">
                Ver Boletim de Notas
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}


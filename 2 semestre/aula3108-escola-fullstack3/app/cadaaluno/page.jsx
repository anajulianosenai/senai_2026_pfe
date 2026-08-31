'use client';

import { useState } from 'react';
import Header from '../components/header';
import { saveAluno } from '../components/storage';
import Link from 'next/link';

const NATIVE_STICKERS = ["🎀 Laço Rosa", "🌸 Flor Kawaii", "👑 Coroinha", "🌟 Estrela Brilhante", "🍓 Morango Fofo", "🍰 Bolo Doce"];

export default function CadastroAluno() {
  const [formData, setFormData] = useState({
    nome: '',
    matricula: '',
    email: '',
    curso: 'Desenvolvimento Fullstack',
    status: 'Ativo',
    sticker: '🎀 Laço Rosa'
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAutoFill = () => {
    const nomesFofos = ["My Melody", "Cinnamoroll", "Keroppi", "Pompompurin", "Kuromi", "Chococat", "Little Twin Stars"];
    const cursosFofos = ["Desenvolvimento Fullstack", "Design UX/UI", "Administração", "Redes de Computadores"];
    const randomNome = nomesFofos[Math.floor(Math.random() * nomesFofos.length)] + " " + Math.floor(10 + Math.random() * 90);
    const randomEmail = `${randomNome.toLowerCase().replace(/\s+/g, '.')}@escola.edu.br`;
    const randomMatricula = `2026${Math.floor(100 + Math.random() * 900)}`;

    setFormData({
      nome: randomNome,
      matricula: randomMatricula,
      email: randomEmail,
      curso: cursosFofos[Math.floor(Math.random() * cursosFofos.length)],
      status: 'Ativo',
      sticker: NATIVE_STICKERS[Math.floor(Math.random() * NATIVE_STICKERS.length)]
    });
    setMensagem('Formulário preenchido com um estudante fofo de exemplo! ✨');
    setTimeout(() => setMensagem(''), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) {
      setMensagem('Por favor, preencha os campos obrigatórios.');
      return;
    }

    saveAluno(formData);
    setMensagem('Aluno cadastrado com sucesso na Hello Kitty Academy! 🎀');
    setFormData({
      nome: '',
      matricula: '',
      email: '',
      curso: 'Desenvolvimento Fullstack',
      status: 'Ativo',
      sticker: '🎀 Laço Rosa'
    });

    setTimeout(() => {
      setMensagem('');
    }, 4000);
  };

  return (
    <div>
      <Header />
      <main className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Card do Formulário */}
          <div className="card">
            <div className="card-header">
              <h2>Cadastro de Aluno</h2>
              <p>Preencha as informações abaixo para matricular um novo estudante.</p>
            </div>

            {mensagem && (
              <div className={`alert ${mensagem.includes('sucesso') || mensagem.includes('preenchido') ? 'alert-success' : 'alert-error'}`}>
                {mensagem}
              </div>
            )}

            <div style={{ marginBottom: '1.2rem', textAlign: 'right' }}>
              <button type="button" onClick={handleAutoFill} className="btn btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
                ✨ Preencher com Exemplo Kawaii
              </button>
            </div>

            <form onSubmit={handleSubmit} className="form-grid">
              <div className="form-group">
                <label htmlFor="nome">Nome Completo *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Ex: João da Silva"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="matricula">Matrícula (opcional)</label>
                <input
                  type="text"
                  id="matricula"
                  name="matricula"
                  value={formData.matricula}
                  onChange={handleChange}
                  placeholder="Gerada automaticamente se vazio"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="joao@escola.edu.br"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="curso">Curso / Turma</label>
                <select id="curso" name="curso" value={formData.curso} onChange={handleChange}>
                  <option value="Desenvolvimento Fullstack">Desenvolvimento Fullstack</option>
                  <option value="Design UX/UI">Design UX/UI</option>
                  <option value="Administração">Administração</option>
                  <option value="Redes de Computadores">Redes de Computadores</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select id="status" name="status" value={formData.status} onChange={handleChange}>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="sticker">Emblema Kawaii Hello Kitty</label>
                <select id="sticker" name="sticker" value={formData.sticker} onChange={handleChange}>
                  {NATIVE_STICKERS.map((st, idx) => (
                    <option key={idx} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  🎀 Salvar Cadastro
                </button>
                <Link href="/listaaluno" className="btn btn-secondary">
                  Ver Lista de Alunos
                </Link>
              </div>
            </form>
          </div>

          {/* Card de Pré-visualização da Carteirinha Hello Kitty */}
          <div className="card" style={{ alignSelf: 'start', background: 'linear-gradient(135deg, #ffffff 0%, #fff0f5 100%)' }}>
            <div className="card-header">
              <h2>Carteirinha de Estudante</h2>
              <p>Pré-visualização em tempo real do crachá fofo do aluno!</p>
            </div>

            <div style={{
              background: '#ffffff',
              border: '3px solid #ff4d8d',
              borderRadius: '24px',
              padding: '1.8rem 1.2rem',
              textAlign: 'center',
              boxShadow: '0 10px 25px rgba(255, 77, 141, 0.2)',
              position: 'relative'
            }}>
              <span style={{ position: 'absolute', top: '12px', right: '16px', fontSize: '1.5rem' }}>🎀</span>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ff75a1, #ff2a5f)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1rem auto',
                boxShadow: '0 6px 14px rgba(255, 42, 95, 0.3)'
              }}>
                🐱
              </div>
              <h3 style={{ color: '#ff4d8d', fontSize: '1.4rem', marginBottom: '4px' }}>
                {formData.nome || "Nome do Estudante"}
              </h3>
              <span className="code-tag" style={{ display: 'inline-block', marginBottom: '0.8rem' }}>
                MATRÍCULA: {formData.matricula || "2026-AUTO"}
              </span>
              <p style={{ color: '#4a2b3b', fontSize: '0.95rem', fontWeight: '600' }}>
                {formData.curso}
              </p>
              <p style={{ color: '#8c5b73', fontSize: '0.85rem', marginTop: '2px' }}>
                {formData.email || "email@escola.edu.br"}
              </p>
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                <span className={`badge ${formData.status === 'Ativo' ? 'badge-success' : 'badge-danger'}`}>
                  {formData.status}
                </span>
                <span className="badge badge-warning">
                  {formData.sticker}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


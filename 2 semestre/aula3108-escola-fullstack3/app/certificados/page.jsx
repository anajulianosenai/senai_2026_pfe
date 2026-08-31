'use client';

import { useState, useEffect } from 'react';
import Header from '../components/header';
import { getAlunos, getNotas } from '../components/storage';

export default function CertificadosPage() {
  const [alunos, setAlunos] = useState([]);
  const [selectedAluno, setSelectedAluno] = useState('');
  const [curso, setCurso] = useState('Desenvolvimento Fullstack');
  const [tituloHonra, setTituloHonra] = useState('Destaque Acadêmico Kawaii 🎀');
  const [dataEmissao, setDataEmissao] = useState('');

  useEffect(() => {
    const list = getAlunos();
    setAlunos(list);
    if (list.length > 0) {
      setSelectedAluno(list[0].nome);
      setCurso(list[0].curso || 'Desenvolvimento Fullstack');
    }
    const hoje = new Date().toLocaleDateString('pt-BR');
    setDataEmissao(hoje);
  }, []);

  const handleSelectChange = (e) => {
    const nome = e.target.value;
    setSelectedAluno(nome);
    const al = alunos.find(a => a.nome === nome);
    if (al) {
      setCurso(al.curso);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div>
      <Header />
      <main className="container">
        <div className="card">
          <div className="card-header-flex">
            <div>
              <h2>Gerador de Certificados Kawaii</h2>
              <p>Emita certificados fofos de aprovação e destaque para os estudantes!</p>
            </div>
            <button onClick={handlePrint} className="btn btn-primary">
              🖨️ Imprimir Certificado
            </button>
          </div>

          <div className="form-grid" style={{ marginBottom: '2rem' }}>
            <div className="form-group">
              <label>Selecione o Estudante</label>
              <select value={selectedAluno} onChange={handleSelectChange}>
                {alunos.map(a => (
                  <option key={a.id} value={a.nome}>{a.nome} ({a.curso})</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Título da Conquista</label>
              <select value={tituloHonra} onChange={(e) => setTituloHonra(e.target.value)}>
                <option value="Destaque Acadêmico Kawaii 🎀">Destaque Acadêmico Kawaii 🎀</option>
                <option value="Excelência e Dedicação 🌟">Excelência e Dedicação 🌟</option>
                <option value="Aprovação em Programação 💻">Aprovação em Programação 💻</option>
                <option value="Estudante Estrela Hello Kitty ✨">Estudante Estrela Hello Kitty ✨</option>
              </select>
            </div>
          </div>

          {/* Visualizador do Certificado Imprimível */}
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #fff0f5 50%, #ffffff 100%)',
            border: '8px double #ff4d8d',
            borderRadius: '24px',
            padding: '3rem 2rem',
            textAlign: 'center',
            boxShadow: '0 15px 35px rgba(255, 77, 141, 0.2)',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎀 📜 🎀</div>
            <h1 style={{ color: '#ff4d8d', fontFamily: 'serif', fontSize: '2.2rem', marginBottom: '0.2rem' }}>
              CERTIFICADO DE HONRA
            </h1>
            <p style={{ color: '#8c5b73', fontStyle: 'italic', letterSpacing: '2px', marginBottom: '1.5rem' }}>
              HELLO KITTY ACADEMY • SANRIO EDUCATION
            </p>

            <p style={{ fontSize: '1.1rem', color: '#4a2b3b', margin: '1rem 0' }}>
              Certificamos com muito carinho e admiração que o(a) estudante
            </p>

            <h2 style={{ fontSize: '2.4rem', color: '#ff2a5f', textDecoration: 'underline #ffb8d2', margin: '0.8rem 0' }}>
              {selectedAluno || "Nome do Estudante"}
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#4a2b3b', maxWidth: '600px', margin: '1rem auto', lineHeight: '1.6' }}>
              concluiu com êxito as etapas do curso de <strong style={{ color: '#ff4d8d' }}>{curso}</strong>, demonstrando excelente desempenho, carinho e a honra de <strong>{tituloHonra}</strong>.
            </p>

            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', borderTop: '2px dashed #ffb8d2', paddingTop: '1.5rem' }}>
              <div>
                <p style={{ fontWeight: '700', color: '#ff4d8d' }}>Diretoria Hello Kitty 🎀</p>
                <p style={{ fontSize: '0.85rem', color: '#8c5b73' }}>Assinatura Digital</p>
              </div>

              <div>
                <p style={{ fontWeight: '700', color: '#ff4d8d' }}>Data de Emissão 🌸</p>
                <p style={{ fontSize: '0.85rem', color: '#8c5b73' }}>{dataEmissao}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Header from '../components/header';
import { exportData, importData, resetStorage } from '../components/storage';

export default function FerramentasPage() {
  const [jsonText, setJsonText] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleExport = () => {
    const dataStr = exportData();
    setJsonText(dataStr);
    
    // Download JSON file
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_escola_hello_kitty_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);

    setMensagem('Backup exportado e baixado com sucesso! 🎀');
    setTimeout(() => setMensagem(''), 4000);
  };

  const handleImport = () => {
    if (!jsonText.trim()) {
      setMensagem('Cole o texto do JSON no campo abaixo antes de importar.');
      return;
    }
    const success = importData(jsonText);
    if (success) {
      setMensagem('Dados restaurados com sucesso na Hello Kitty Academy! 🚀');
    } else {
      setMensagem('Erro: O formato do JSON informado é inválido. 😿');
    }
    setTimeout(() => setMensagem(''), 4000);
  };

  const handleReset = () => {
    if (confirm('Tem certeza de que deseja restaurar os dados padrões de demonstração?')) {
      resetStorage();
      setMensagem('Dados restaurados para o padrão de demonstração! ✨');
      setTimeout(() => {
        if (typeof window !== 'undefined') window.location.reload();
      }, 1500);
    }
  };

  return (
    <div>
      <Header />
      <main className="container">
        <div className="card">
          <div className="card-header">
            <h2>Ferramentas & Backup de Dados</h2>
            <p>Faça backup, restaure dados em JSON ou reinicie o banco de dados local do sistema.</p>
          </div>

          {mensagem && (
            <div className={`alert ${mensagem.includes('sucesso') || mensagem.includes('restaurados') ? 'alert-success' : 'alert-error'}`}>
              {mensagem}
            </div>
          )}

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <button onClick={handleExport} className="btn btn-primary">
              📥 Exportar Backup (Baixar JSON)
            </button>
            <button onClick={handleReset} className="btn btn-secondary">
              🔄 Restaurar Dados Padrões Hello Kitty
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="jsonText">Importar / Exportar JSON do Sistema</label>
            <textarea
              id="jsonText"
              rows={10}
              value={jsonText}
              onChange={(e) => setJsonText(e.target.value)}
              placeholder="Clique em 'Exportar Backup' para gerar o código JSON aqui ou cole seu backup para importar..."
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '16px',
                border: '2px solid #ffb8d2',
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                background: '#fffdfd'
              }}
            />
          </div>

          <div style={{ marginTop: '1rem' }}>
            <button onClick={handleImport} className="btn btn-primary">
              📤 Restaurar Dados deste JSON
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

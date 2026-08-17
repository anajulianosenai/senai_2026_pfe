import { useState } from 'react';
import Header from '../../components/header';
import './cadastro.css';

export default function Cadastro(){
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [documento, setDocumento] = useState('');

    return (
    <div className="container py-4">
      <Header />

      <div className="mb-4">
        <h3 className="fw-bold mb-1">Cadastro de dados pessoais</h3>
      </div>

      <form className="card shadow-sm border-0 p-4">
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <label className="form-label">Nome</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-3">
            <label className="form-label">Endereço</label>
            <input
              type="text"
              className="form-control"
              placeholder="Seu endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-3">
            <label className="form-label">email</label>
            <input type="text" className="form-control"  
            value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email@seuemail.com'/>
          </div>

          <div className="col-12 col-md-3">
            <label className="form-label">Celular</label>
            <input type="text" className="form-control"  value={celular} onChange={(e) => setCelular(e.target.value)} placeholder='18 00000-0000'/>
          </div>

          <div className="col-12 col-md-3">
            <label className="form-label">Documento</label>
            <input type="text" className="form-control"  value={documento} onChange={(e) => setDocumento(e.target.value)} placeholder='000.000.000-00'/>
          </div>

        </div>

        <hr className="my-4" />

        {/* BOTÕES */}
        <div className="d-flex flex-column flex-md-row gap-2 justify-content-end mt-4">
          <button type="submit" className="btn btn-lg btn-primary">
            <i className="bi bi-save me-2"></i>
            Salvar cadastro
          </button>
        </div>
      </form>
    </div>
  );

}


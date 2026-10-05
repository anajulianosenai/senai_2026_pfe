'use client';
import { useState } from 'react';
import styles from '../page.module.css';

export default function JurosCompostos() {
  const [capital, setCapital] = useState('');
  const [taxa, setTaxa] = useState('');
  const [tempo, setTempo] = useState('');
  const [resultado, setResultado] = useState(null);
  const [displayValue, setDisplayValue] = useState('0');
  const [activeField, setActiveField] = useState(null);

  function CalcularJuros(e) {
    e.preventDefault();
    const cap = parseFloat(capital);
    const tax = parseFloat(taxa);
    const temp = parseFloat(tempo);

    if (isNaN(cap) || isNaN(tax) || isNaN(temp)) {
      setDisplayValue('ERRO');
      setResultado(null);
      return;
    }

    // Cálculo do montante com Juros Compostos: M = C * (1 + i)^t
    const montante = cap * Math.pow(1 + tax / 100, temp);
    const juros = montante - cap;

    setResultado({ juros, montante });
    setDisplayValue(montante.toFixed(2));
  }

  function handleNumPress(val) {
    if (!activeField) return;
    const setters = { capital: setCapital, taxa: setTaxa, tempo: setTempo };
    const getters = { capital, taxa, tempo };
    const current = getters[activeField] || '';
    const newVal = current === '0' ? val : current + val;
    setters[activeField](newVal);
    setDisplayValue(newVal);
  }

  function handleDecimal() {
    if (!activeField) return;
    const setters = { capital: setCapital, taxa: setTaxa, tempo: setTempo };
    const getters = { capital, taxa, tempo };
    const current = getters[activeField] || '';
    if (!current.includes('.')) {
      const newVal = current ? current + '.' : '0.';
      setters[activeField](newVal);
      setDisplayValue(newVal);
    }
  }

  function handleDel() {
    if (!activeField) return;
    const setters = { capital: setCapital, taxa: setTaxa, tempo: setTempo };
    const getters = { capital, taxa, tempo };
    const current = getters[activeField] || '';
    const newVal = current.slice(0, -1);
    setters[activeField](newVal);
    setDisplayValue(newVal || '0');
  }

  function handleAC() {
    setCapital('');
    setTaxa('');
    setTempo('');
    setResultado(null);
    setDisplayValue('0');
    setActiveField(null);
  }

  const buttons = [
    { label: '7', type: 'num', top: 'CONST' },
    { label: '8', type: 'num', top: 'CONV' },
    { label: '9', type: 'num', top: 'CLR' },
    { label: 'DEL', type: 'del', top: 'INS' },
    { label: 'AC', type: 'ac', top: 'OFF' },
    { label: '4', type: 'num', top: 'MATRIX' },
    { label: '5', type: 'num', top: 'VECTOR' },
    { label: '6', type: 'num', top: 'BASE' },
    { label: '×', type: 'op', top: 'Pol' },
    { label: '÷', type: 'op', top: 'Rec' },
    { label: '1', type: 'num', top: 'STAT' },
    { label: '2', type: 'num', top: 'CMPLX' },
    { label: '3', type: 'num', top: 'BASE' },
    { label: '+', type: 'op', top: '' },
    { label: '−', type: 'op', top: '' },
    { label: '0', type: 'num', top: 'Rnd' },
    { label: '.', type: 'dot', top: '' },
    { label: 'CALC', type: 'calc', top: '' },
    { label: 'Ans', type: 'ans', top: '' },
    { label: '=', type: 'eq', top: '' },
  ];

  function handleButtonClick(btn) {
    if (btn.type === 'num') handleNumPress(btn.label);
    else if (btn.type === 'dot') handleDecimal();
    else if (btn.type === 'del') handleDel();
    else if (btn.type === 'ac') handleAC();
    else if (btn.type === 'eq' || btn.type === 'calc') {
      const fakeEvent = { preventDefault: () => {} };
      CalcularJuros(fakeEvent);
    }
    else if (btn.type === 'ans') {
      if (resultado) setDisplayValue(resultado.montante.toFixed(2));
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.calculator}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.brand}>CASIO</div>
          <div className={styles.solar}></div>
        </div>
        <div className={styles.modelInfo}>
          <span className={styles.modelName}>Juros Compostos</span>
          <span className={styles.edition}>by PFE</span>
        </div>

        {/* Display */}
        <div className={styles.displayWrapper}>
          <div className={styles.displayInner}>
            <div className={styles.displayTopRow}>
              <span>M</span>
              <span>Math ▲</span>
            </div>
            <div className={styles.displayMain}>
              {displayValue}
            </div>
            {resultado && (
              <div className={styles.displayResult}>
                <span>J: R$ {resultado.juros.toFixed(2)}</span>
                <span>M: R$ {resultado.montante.toFixed(2)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Input fields as labeled selectors */}
        <div className={styles.inputFields}>
          {[
            { key: 'capital', label: 'Capital (R$)', val: capital, setter: setCapital },
            { key: 'taxa',    label: 'Taxa (%)',     val: taxa,    setter: setTaxa },
            { key: 'tempo',   label: 'Tempo (meses)', val: tempo,   setter: setTempo },
          ].map(({ key, label, val }) => (
            <button
              key={key}
              className={`${styles.fieldBtn} ${activeField === key ? styles.fieldBtnActive : ''}`}
              onClick={() => { setActiveField(key); setDisplayValue(val || '0'); }}
              type="button"
            >
              <span className={styles.fieldLabel}>{label}</span>
              <span className={styles.fieldVal}>{val || '—'}</span>
            </button>
          ))}
        </div>

        {/* Keypad */}
        <div className={styles.keypad}>
          {buttons.map((btn, i) => (
            <button
              key={i}
              className={`${styles.key} ${styles['key_' + btn.type]}`}
              onClick={() => handleButtonClick(btn)}
              type="button"
            >
              {btn.top && <span className={styles.keyTop}>{btn.top}</span>}
              <span className={styles.keyLabel}>{btn.label}</span>
            </button>
          ))}
        </div>

        {/* Cat paw decorative footer */}
        <div className={styles.footer}>
          <span className={styles.paw}>🐾</span>
          <span className={styles.footerText}>Natural-V.P.A.M.</span>
          <span className={styles.paw}>🐾</span>
        </div>
      </div>
    </div>
  );
}
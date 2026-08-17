'use client';

import { useState } from 'react';
import Header from '../components/header';

export default function Calculadora() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function Somar() {
        setResultado(Number(n1) + Number(n2));
    }

    function Subtrair() {
        setResultado(Number(n1) - Number(n2));
    }

    function Multiplicar() {
        setResultado(Number(n1) * Number(n2));
    }

    function Dividir() {
        if (Number(n2) === 0) {
            setResultado('Não é possível dividir por zero');
            return;
        }

        setResultado(Number(n1) / Number(n2));
    }

    function RaizQuadrada() {
        if (Number(n1) < 0) {
            setResultado('Não existe raiz real de número negativo');
            return;
        }

        setResultado(Math.sqrt(Number(n1)));
    }

    return (
        <>
            <Header />

            <main>
                <label htmlFor="n1">Número 1:</label>

                <input
                    id="n1"
                    type="number"
                    value={n1}
                    onChange={(e) => setN1(e.target.value)}
                />

                <label htmlFor="n2">Número 2:</label>

                <input
                    id="n2"
                    type="number"
                    value={n2}
                    onChange={(e) => setN2(e.target.value)}
                />

                <span>{resultado}</span>

                <button onClick={Somar}>Somar</button>

                <button onClick={Subtrair}>Subtrair</button>

                <button onClick={Multiplicar}>Multiplicar</button>

                <button onClick={Dividir}>Dividir</button>

                <button onClick={RaizQuadrada}>Raiz Quadrada</button>
            </main>
        </>
    );
}
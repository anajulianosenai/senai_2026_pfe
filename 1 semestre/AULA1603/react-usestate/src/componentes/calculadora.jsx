import {useState} from 'react';

export default function Calculadora({titulo}){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState (0);


    //SOMA
    function somar(e){
    e.preventDefault();
     if(Number(num1) <= 0){
    alert("Não são permitidos números zero ou negativos");
    return;
    }
    setResultado(Number(num1) + Number(num2));
    return resultado;
    }


    //SUBTRAÇÃO
    function subtrair(e){
    e.preventDefault();
     if(Number(num1) <= 0){
    alert("Não são permitidos números zero ou negativos");
    return;
    }
    setResultado(Number(num1) - Number(num2));
    return resultado;
    }


    //DIVISÃO
      function dividir(e){
    e.preventDefault();
     if(Number(num1) <= 0){
    alert("Não são permitidos números zero ou negativos");
    return;
    }
    setResultado(Number(num1) / Number(num2));
    return resultado;
    }


    //MULTIPLICAÇÃO
    function multiplicar(e){
    e.preventDefault();
     if(Number(num1) <= 0){
    alert("Não são permitidos números zero ou negativos");
    return;
    }
    setResultado(Number(num1) * Number(num2));
    return resultado;
    }

    //RAIZ
    function raiz(e){
    e.preventDefault();
    if(Number(num1) <= 0){
        alert("Não são permitidos números zero ou negativos");
        return;
    }
    setResultado(Math.sqrt(Number(num1)));
    return resultado;
    }
    

    //POTENCIA
      function potencia(e){
    e.preventDefault();
    if(Number(num1) <= 0 || Number(num2) <= 0){
    alert("Não são permitidos números zero ou negativos");
    return;
    }
    setResultado(Math.pow(Number(num1), Number(num2)));
    return resultado;
    }






      return(
    <>
    <h1>{titulo}</h1>
    <div>
        <form action="">
        <label htmlFor='numero1'>Número 1</label>
        <input type="number" placeholder="0" value={num1} onChange={(e) => setNum1(e.target.value)}/>
        <label htmlFor='numero2'>Número 2</label>
        <input type="number" placeholder="0"value={num2} onChange={(e) => setNum2(e.target.value)}/>
        <button onClick={somar}>Somar</button>
        <button onClick={subtrair}>Subtrair</button>
        <button onClick={dividir}>Dividir</button>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={raiz}>Raiz Quadrada</button>
        <button onClick={potencia}>Potência</button>
        <span style={{color:'white'}}>Resultado: {resultado}</span>
        </form>
    </div>

        </>
       
 ) }
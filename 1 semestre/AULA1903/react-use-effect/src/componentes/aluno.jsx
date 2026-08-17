import {useState, useEffect} from "react";

export default function Aluno(){
    const [nome, setNome] = useState('');
    const [idade, setIdade] =useState(0);

    useEffect(() => {
        console.log('App renderizada');
    })

        useEffect(() => {
        console.log('App montado');
    },[])

            useEffect(() => {
        console.log('O nome mudou ,',nome);
    },[nome])

    useEffect(() => {
    console.log('O idade mudou ,',idade);
    },[idade])

    return(
        <>
        <form action="">
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
            <input type="text" value={idade} onChange={(e) => setIdade(e.target.value)}/>
        </form>
        </>
    )
}
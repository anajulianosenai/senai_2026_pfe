const estudantes=[
    {id:1,nome: "Barbarosa",ra: "123456",disciplina: 'Matemática'},
    {id:2,nome: "Emanuel Quina",ra: "123445",disciplina: 'Português'},
    {id:3,nome: "Tio Kayaque",ra: "123455",disciplina: 'Biologia'}]
 
    export default function ListaMap({ titulo }) {
        const listaEstudantes = estudantes.map((estudante) => {
            return <li key={estudante.id}>
                <h3>{estudante.nome}</h3>
                <p>{estudante.ra}</p>
                <p>{estudante.idade} anos</p>
            </li>
    })
        return (
            <>
            <h1>{titulo}</h1>
            <ul>{listaEstudantes}</ul>
            </>
        )
    }
    
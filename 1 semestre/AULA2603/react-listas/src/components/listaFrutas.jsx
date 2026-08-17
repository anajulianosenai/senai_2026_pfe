const frutas=[
    {id:1,nome: "Morango"},
    {id:2,nome: "Banana"},
    {id:3,nome: "Amora"},
    {id:4,nome: "Acerola"}
]
export default function ListaFrutas({ titulo }) {
        const listaFrutas = frutas.map((frutas) => {
            return <li key={frutas.nome}>
            </li>
    })
        return (
            <>
            <h1>{titulo}</h1>
            <ul>{listaFrutas}</ul>
            </>
        )
    }
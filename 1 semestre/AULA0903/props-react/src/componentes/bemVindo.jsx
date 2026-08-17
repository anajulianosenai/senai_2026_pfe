

export default function BemVindo(props){
    return(
        <>
        <h1>{props.titulo}</h1>
        <h3>{props.texto}<span>{props.nome}</span></h3>
        </>

    )
}
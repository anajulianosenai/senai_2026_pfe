

export default function MeuAvatar(props){
    return(
        <>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnnbIgmN8hSCuhf9pLKv4vDCAfRXzWuU12CnXZ9pli9paas0W82XrOqd0IicFMf0BMxvddxOQ1hE97KxE3X8mJaaeBbEl9P3mYyGcWuY&s" alt="meu icon" srcset="" />
        <h1>{props.avatar}</h1>
        <h2>{props.nome}</h2>
        <h2>{props.estilo}</h2>
        <h2><span>{props.idade}</span></h2>
        <h2>{props.disciplina}</h2>

        </>

    )
}
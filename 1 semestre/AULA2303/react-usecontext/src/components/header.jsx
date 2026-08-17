import { useContext} from "react";
import { temaContexto } from '../context/temaContexto';

export default function Header(){
    const {tema, mudarTema} = useContext(temaContexto);

    return(
        <header className={`header-${tema}`}>
            <h1>Meu primeiro site com tema de Contextp</h1>
            <button onClick={mudarTema}>
                Mudar tema para {tema === 'light' ? 'escuro':'claro'}
            </button>
        </header>
    )
}

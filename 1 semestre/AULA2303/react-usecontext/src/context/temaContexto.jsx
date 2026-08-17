import { createContext, useState } from "react";

export const temaContexto= createContext(null);

export function TemaProvedor({children}){
    const[tema, setTema] = useState('light');

    function mudarTema(){
        setTema((prev) => (prev === 'light' ?  'dark' :'light'))
    }
    const valor= {tema, mudarTema};

    return(
        <temaContexto.Provider value={valor}>
            {children}
        </temaContexto.Provider>
    )
}

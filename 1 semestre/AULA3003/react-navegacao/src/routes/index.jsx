import {Routes, Route} from "react-router-dom";


//import das páginas
import Principal from '../pages/principal';
import Sobre from '../pages/sobre';

export default function Rotas(){
return (
    <Routes>
    <Route path='/' element={<Principal/>}/>
    <Route path='/sobre' element={<Sobre/>}/>;
    </Routes>
)
}
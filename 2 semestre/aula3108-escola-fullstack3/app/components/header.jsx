import Link from "next/link";  

export default function Header()  {
 return (
    <header>
     <h1>Projeto Escola</h1>

     <nav>
         <ul>
            <li><Link href='/'>Início</Link></li>
            <li><Link href='/cadaluno'>Alunos - Cadastro</Link></li>
            <li><Link href='/listaluno'>Alunos - Lista</Link></li>
            <li><Link href='/notaluno'>Alunos - Cadastro de notas</Link></li>
            <li><Link href='/listnota'>Alunos - Lista de Notas</Link></li>

         </ul>
     </nav>
    </header>
 )
   
   }

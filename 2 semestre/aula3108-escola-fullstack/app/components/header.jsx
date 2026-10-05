import Link from "next/link";

export default function Header() {
    return(
        <header>
            <h1>Projeto Escola</h1>
            <nav>
                <ul>
                    <li><Link href="/">Início</Link></li>
                    <li><Link href="/">Alunos - Cadastro</Link></li>
                    <li><Link href="/">Alunos - Lista</Link></li>
                    <li><Link href="/">Alunos - Cadastro de Notas</Link></li>
                    <li><Link href="/">Lista de Notas</Link></li>
                </ul>
            </nav>
        </header>
    )
}
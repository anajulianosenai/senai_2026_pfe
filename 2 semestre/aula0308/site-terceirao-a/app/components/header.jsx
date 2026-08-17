import Link from "next/link";

export default function Header() {
    return (
        <header>
            <a href="/"><h1>Terceiro A</h1></a>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                     <li><Link href="/sobre">Sobre</Link></li>
                      <li><Link href="/fotos">Fotos</Link></li>
                  
                </ul>
            </nav>
        </header>
    )
}
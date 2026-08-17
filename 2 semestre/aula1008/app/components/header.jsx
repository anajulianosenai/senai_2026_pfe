import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/inicio">
                            Início
                        </Link>
                    </li>

                    <li>
                        <Link href="/categorias">
                            Categorias
                        </Link>
                    </li>

                    <li>
                        <Link href="/categorias/esportes">
                            Esportes
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
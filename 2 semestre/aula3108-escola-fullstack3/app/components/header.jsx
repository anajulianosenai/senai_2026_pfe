import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>
        Hello Kitty Academy
      </h1>

      <nav>
        <ul>
          <li><Link href='/'>🌸 Início</Link></li>
          <li><Link href='/cadaaluno'>📝 Cadastrar Aluno</Link></li>
          <li><Link href='/listaaluno'>📋 Lista de Alunos</Link></li>
          <li><Link href='/notaaluno'>🎀 Cadastrar Notas</Link></li>
          <li><Link href='/listanota'>📊 Lista de Notas</Link></li>
          <li><Link href='/ranking'>🏆 Ranking</Link></li>
          <li><Link href='/certificados'>📜 Certificados</Link></li>
          <li><Link href='/ferramentas'>⚙️ Backup</Link></li>
        </ul>
      </nav>
    </header>
  );
}


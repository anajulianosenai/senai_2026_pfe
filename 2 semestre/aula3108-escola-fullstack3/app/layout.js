import "./globals.css";

export const metadata = {
  title: "Projeto Escola",
  description: "Sistema de gestão escolar, cadastro de alunos e boletim de notas!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

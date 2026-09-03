import { Fredoka, Quicksand } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "Projeto Escola",
  description: "Sistema fofo e completo de gestão escolar, cadastro de alunos e boletim de notas com tema Hello Kitty!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  );
}


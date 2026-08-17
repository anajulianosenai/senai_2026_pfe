import { useState } from "react";
import "./NewsSection.css";

export default function NewsSection() {
  const [darkMode, setDarkMode] = useState(false);

  const noticias = [
    {
      titulo: "Cachorrinho herói: husky detecta vazamento de gás e salva bairro de explosão",
      descricao: "O pet cavou um buraco no jardim da frente de casa, o que acendeu um alerta na sua tutora",
      imagem: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/01/Design-sem-nome-2024-01-24T170355.920.png?w=419&h=249&crop=1"
    },
    {
      titulo: "Gato Naruto: delegacia no Chile ganha reforço felino",
      descricao: "Resgatado das ruas, o felino chamado Naruto ganhou uniforme policial e se tornou mascote oficial de delegacia na cidade de Porvenir",
      imagem: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/08/DEFAULT-2.png?w=419&h=249&crop=1"
    },
    {
      titulo: "Morango do amor: confeitaria vende 3 mil unidades por dia no RJ",
      descricao: "Fenômeno das redes sociais movimenta confeitarias pelo Brasil. Somente em julho, mais de 524 mil unidades foram entregues, com aumento de 2.490% em relação a junho",
      imagem: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/07/download-e1753453969260.jpg?w=419&h=249&crop="
    }
  ];

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <button onClick={() => setDarkMode(!darkMode)} className="botao-tema">
        Mudar Tema
      </button>

      <h1>Notícias</h1>

      <div className="cards">
        {noticias.map((noticia, index) => (
          <div className="card" key={index}>
            <img src={noticia.imagem} alt="noticia" />
            <h2>{noticia.titulo}</h2>
            <p>{noticia.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
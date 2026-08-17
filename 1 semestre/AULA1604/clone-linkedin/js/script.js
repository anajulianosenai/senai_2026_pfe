// Curtir botão interativo
const botoes = document.querySelectorAll(".btn-light");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    if (botao.innerText.includes("Curtir")) {
      botao.innerText = "Curtido 👍";
    }
  });
});
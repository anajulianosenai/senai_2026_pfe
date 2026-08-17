import { useState } from "react";

export default function ConectaAPI() {
  const [conselho, setConselho] = useState("");

  async function buscarConselho() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setConselho(data.slip.advice);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>⋆. 𐙚˚࿔ Gerador de conselhos para você 𝜗𝜚˚⋆</h1>

      <button onClick={buscarConselho}>
       ╰┈➤ Gerar um conselho
      </button>

      <p style={{ marginTop: "20px" }}>
        {conselho}
      </p>
    </div>
  );
}
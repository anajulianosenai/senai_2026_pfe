import Header from "../../components/header";

import './relatorio.css';



export default function Relatorio() {
  const leituras = [
    {
      horario: "12:00",
      qualidade: "Boa",
      iqa: 42,
      temperatura: "26 C",
      umidade: "68%",
    },
    {
      horario: "11:00",
      qualidade: "Boa",
      iqa: 39,
      temperatura: "'40 C",
      umidade: "50%",
    },
    {
      horario: "09:00",
      qualidade: "Boa",
      iqa: 25,
      temperatura: "17 C",
      umidade: "40%",
    },
    {
      horario: "03:00",
      qualidade: "Boa",
      iqa: 35,
      temperatura: "13 C",
      umidade: "75%",
    },
  ];

  return (
    <div className="container">
      <Header />
      <h3>Relatório Estação Meteorológica</h3>
      <p>Monitoramento da temperatura e umidade em tempo real</p>
      <section className="graficos">{/*colocar graficos aqui*/}</section>
      <section className="tabela-leituras">
        <table>
          <thead>
            <tr>
              <th>Horário</th>
              <th>Qualidade ar</th>
              <th>IQA</th>
              <th>Temperatura</th>
              <th>Umidade</th>
              <th>Vento</th>
            </tr>
          </thead>
          <tbody>
            {leituras.map((item, index) => (
              <tr key={index}>
                <td>{item.horario} </td>
                <td>{item.qualidade} </td>
                <td>{item.iqa} </td>
                <td>{item.temperatura} </td>
                <td>{item.umidade} </td>
                <td>{item.vento} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}


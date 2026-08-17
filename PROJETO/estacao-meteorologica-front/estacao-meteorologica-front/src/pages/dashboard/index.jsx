// import GraficoBarra from "../../components/graficoBarra";
import Header from "../../components/header";

export default function Dashboard() {
  return (
    <div className="container py-4">
      <Header />
      
      <section className="row g-3">
        <div className="col-12 col-md-3">
          <div className="card shadow-sm text-center p-3">
            <h6 className="text-muted">Temperatura</h6>
            <h2 className="fw-bold text-primary">26°C</h2>
            <i className="bi bi-thermometer-half fs-1 text-primary"></i>
          </div>
        </div>

        <div className="col-12 col-md-3">
          <div className="card shadow-sm text-center p-3">
            <h6 className="text-muted">Umidade</h6>
            <h2 className="fw-bold text-info">68%</h2>
            <i className="bi bi-droplet-half fs-1 text-info"></i>
          </div>
        </div>

        <div className="col-12 col-md-3">
          <div className="card shadow-sm text-center p-3">
            <h6 className="text-muted">Pressão</h6>
            <h2 className="fw-bold">1013 hPa</h2>
            <i className="bi bi-speedometer2 fs-1 text-dark"></i>
          </div>
        </div>

        <div className="col-12 col-md-3">
          <div className="card shadow-sm text-center p-3">
            <h6 className="text-muted">Vento</h6>
            <h2 className="fw-bold text-warning">12 km/h</h2>
            <i className="bi bi-wind fs-1 text-warning"></i>
          </div>
        </div>
      </section>

      <section className="row g-2 shadow-sm mt-4 p-3 d-flex gap-3 border rounded">
        <h6 className="text-muted">Gráficos</h6>
        
        <div className="col-12 col-md card shadow-sm text-center p-3" style={{ height: "250px" }}>
          {/* gráficos */}
        </div>
        <div className="col-12 col-md card shadow-sm text-center p-3" style={{ height: "250px" }}>
          {/* gráficos */}
        </div>
      </section>

      <section className="card shadow-sm mt-4 p-3">
        <h6 className="text-muted">Leituras Recentes</h6>
        
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Horário</th>
              <th>Temp.</th>
              <th>Umidade</th>
              <th>Vento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12:00</td>
              <td>26°C</td>
              <td>68%</td>
              <td>12 km/h</td>
            </tr>
            <tr>
              <td>11:00</td>
              <td>25°C</td>
              <td>70%</td>
              <td>10 km/h</td>
            </tr>
            <tr>
              <td>10:00</td>
              <td>24°C</td>
              <td>72%</td>
              <td>8 km/h</td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
}
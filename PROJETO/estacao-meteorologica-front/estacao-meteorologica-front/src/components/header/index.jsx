import { Link } from "react-router-dom"
import Header from "../../components/header";
import "./header.css"

export default function Header() {
    return (
        <header className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">
                <i className="bi bi-cloud-sun me-2"></i>
                Estação Meteorológica
            </h2>

            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link text-secondary destaque-link">
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/cadastro" className="nav-link text-secondary destaque-link">
                            Cadastro
                        </Link>
                    </li>

                    {/* RELATÓRIO ÚNICO */}
                    <li className="nav-item">
                        <Link to="/relatorio" className="nav-link text-secondary destaque-link">
                            Relatórios
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/" className="nav-link text-secondary destaque-link">
                            Sair
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
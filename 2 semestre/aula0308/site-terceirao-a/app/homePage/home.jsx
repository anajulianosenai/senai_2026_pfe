import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Turma from '../img/turma.webp'

export default function HomePage() {
    return (
        <>
        <Header />
            <main>
                <section>
                    <Image src={Turma}/>
                </section>
                    <section>
                    <h3>Informações</h3>
                    <div>
                        <h6>Formatura 18/11/2026</h6>
                        <p>Todos estarão reunidos para viver esse utimo momento</p>
                        <div>
                            <h6>Trote dia 11</h6>
                            <p>Tema: Personagens</p>
                        </div>
                    </div>
                </section>
            </main>
        </>       
    )
}
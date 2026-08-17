import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function GraficoBarra() {

    const opcoes = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Gráfico de Barras'
            }
        },
    }

    const labels = [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ]

    const dados = {
        labels,
        datasets: [
            {
                label: 'Chuva (mm)',
                data: [12, 19, 8, 15, 10, 7, 5, 9, 14, 20, 18, 11],
                backgroundColor: 'rgba(255, 122, 156, 0.6)',
            },
            {
                label: 'Temperatura (°C)',
                data: [30, 32, 28, 25, 22, 20, 18, 21, 24, 27, 29, 31],
                backgroundColor: 'rgba(209, 107, 134, 0.6)',
            },
        ],
    }

    return <Bar options={opcoes} data={dados} />
}
'use client';
import {useState} from 'react'
import Header from '../components/header'

export default function ListAluno() {
    return (
    <>
    <Header/>
        <h2>Lista de Alunos</h2>
        <table>
            <thead>
                <th>ID</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Série</th>
                <th>RA</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Ana</td>
                    <td>18 anos</td>
                    <td>3º ano A</td>
                    <td>123456</td>
                </tr>
            </tbody>
        </table>
    </>
    )
}
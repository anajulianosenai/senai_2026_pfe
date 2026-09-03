'use client';
import {useState} from 'react'
import Header from '../components/header'

export default function ListaNota() {
    return (
    <>
    <Header/>
        <h2>Lista de Notas</h2>
        <table>
            <thead>
                <th>ID</th>
                <th>Nome</th>
                <th>Trabalho 1</th>
                <th>Trabalho 2</th>
                <th>Nota 1</th>
                <th>Nota 2</th>
                <th>Nota 3</th>
                <th>Média</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Cleydilson</td>
                    <td>8,0</td>
                    <td>9,0</td>
                    <td>7,0</td>
                    <td>8,0</td>
                    <td>9,0</td>
                    <td>8,0</td>
                </tr>
            </tbody>
        </table>
    </>
    )
}
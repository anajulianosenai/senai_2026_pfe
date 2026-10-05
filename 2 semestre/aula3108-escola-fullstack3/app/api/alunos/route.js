import db from "../../db/banco";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const alunos = db.prepare('SELECT * FROM alunos ORDER BY nome').all();
        return NextResponse.json(alunos);
    } catch (error) {
        console.error('Erro ao listar alunos', error);
        return NextResponse.json({ erro: "Erro ao listar alunos" }, { status: 500 });
    }
}

export async function POST(request){
    try {
        const dados = await request.json();
        const sql = db.prepare(`INSERT INTO alunos (nome, idade, serie, ra) VALUES (?,?,?,?)`);
        sql.run(dados.nome, dados.idade,dados.serie, dados.ra)
        return NextResponse.json({
            mensagem: "Aluno cadastrado com sucesso!"
        })
    } catch (error) {
        console.error('Erro ao realizar o cadastro', error)
    }
}

export async function PUT(request) {
    try {
        const dados = await request.json();
        const sql = db.prepare(`UPDATE alunos SET nome = ?, idade = ?, serie = ? WHERE ra = ?`);
        const resultado = sql.run(dados.nome, dados.idade, dados.serie, dados.ra);

        if (resultado.changes === 0) {
            return NextResponse.json({ erro: "Aluno não encontrado" }, { status: 404 });
        }

        return NextResponse.json({
            mensagem: "Aluno atualizado com sucesso!"
        });
    } catch (error) {
        console.error('Erro ao atualizar o cadastro', error);
        return NextResponse.json({ erro: "Erro ao atualizar aluno" }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const dados = await request.json();
        const sql = db.prepare(`DELETE FROM alunos WHERE ra = ?`);
        const resultado = sql.run(dados.ra);

        if (resultado.changes === 0) {
            return NextResponse.json({ erro: "Aluno não encontrado" }, { status: 404 });
        }

        return NextResponse.json({
            mensagem: "Aluno deletado com sucesso!"
        });
    } catch (error) {
        console.error('Erro ao deletar o cadastro', error);
        return NextResponse.json({ erro: "Erro ao deletar aluno" }, { status: 500 });
    }
}

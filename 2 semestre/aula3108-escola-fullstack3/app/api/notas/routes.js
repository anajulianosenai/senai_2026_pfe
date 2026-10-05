import db from "../../db/banco";
import { NextResponse } from "next/server";

export async function listNotas(){
    const notas = db.prepare('SELECT notas.id, notas.t1, notas.t2, notas.n1, notas.n2, notas.n3, alunos.nome, alunos.ra FROM notas INNER JOIN alunos ON notas.id_a = alunos.id_aluno ORDER BY alunos.nome').all();
    return NextResponse.json(notas);
}

export async function salvaNotas(request) {
    try {
        const dados = await request.json();
        const sql = db.prepare(`INSERT INTO notas(id_a, t1, t2, n1, n2, n3) VALUES (?, ?, ?, ?, ?, ?)`);
        sql.run(dados.id_aluno, dados.t1, dados.t2, dados.n1, dados.n2, dados.n3);
        return NextResponse.json({
            mensagem: "Notas cadastradas com sucesso!"
        });
    } catch (error) {
        console.error("Erro ao realizar cadastro de notas", error);
        return NextResponse.json({ erro: "Erro ao cadastrar notas" }, { status: 500 });
    }
}

export async function editNotas(request){
    try {
        const dados = await request.json();
        const sql = db.prepare(`UPDATE notas SET t1 = ?, t2 = ?, n1 = ?, n2 = ?, n3 = ? WHERE id = ?`);
        sql.run(dados.t1, dados.t2, dados.n1, dados.n2, dados.n3, dados.id);
        return NextResponse.json({ mensagem: "Notas atualizadas com sucesso!" });
    } catch (error) {
        console.error("Erro ao editar notas", error);
        return NextResponse.json({ erro: "Erro ao editar notas" }, { status: 500 });
    }
}

export async function excluiNotas(request){
    try {
        const dados = await request.json();
        const sql = db.prepare(`DELETE FROM notas WHERE id = ?`);
        sql.run(dados.id);
        return NextResponse.json({ mensagem: "Notas excluídas com sucesso!" });
    } catch (error) {
        console.error("Erro ao excluir notas", error);
        return NextResponse.json({ erro: "Erro ao excluir notas" }, { status: 500 });
    }
}

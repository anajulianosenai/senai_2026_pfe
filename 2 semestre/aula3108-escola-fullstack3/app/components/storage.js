'use client';

const INITIAL_ALUNOS = [
  { id: 1, matricula: "2024001", nome: "Ana Silva", email: "ana.silva@escola.edu.br", curso: "Desenvolvimento Fullstack", status: "Ativo" },
  { id: 2, matricula: "2024002", nome: "Carlos Eduardo", email: "carlos.eduardo@escola.edu.br", curso: "Desenvolvimento Fullstack", status: "Ativo" },
  { id: 3, matricula: "2024003", nome: "Beatriz Lima", email: "beatriz.lima@escola.edu.br", curso: "Design de Interiores", status: "Ativo" },
  { id: 4, matricula: "2024004", nome: "Lucas Mendes", email: "lucas.mendes@escola.edu.br", curso: "Administração", status: "Inativo" }
];

const INITIAL_NOTAS = [
  { id: 1, alunoId: 1, alunoNome: "Ana Silva", disciplina: "Programação Front-End", nota1: 9.5, nota2: 8.5, nota3: 9.0, media: 9.0, situacao: "Aprovado" },
  { id: 2, alunoId: 2, alunoNome: "Carlos Eduardo", disciplina: "Programação Front-End", nota1: 6.0, nota2: 7.0, nota3: 5.5, media: 6.2, situacao: "Recuperação" },
  { id: 3, alunoId: 3, alunoNome: "Beatriz Lima", disciplina: "Design UX/UI", nota1: 8.0, nota2: 9.0, nota3: 8.5, media: 8.5, situacao: "Aprovado" }
];

export function getAlunos() {
  if (typeof window === 'undefined') return INITIAL_ALUNOS;
  try {
    const stored = localStorage.getItem('escola_alunos');
    if (!stored) {
      localStorage.setItem('escola_alunos', JSON.stringify(INITIAL_ALUNOS));
      return INITIAL_ALUNOS;
    }
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      localStorage.setItem('escola_alunos', JSON.stringify(INITIAL_ALUNOS));
      return INITIAL_ALUNOS;
    }
    return parsed;
  } catch (err) {
    console.error("Erro ao carregar alunos:", err);
    return INITIAL_ALUNOS;
  }
}

export function saveAluno(aluno) {
  if (typeof window === 'undefined') return null;
  const alunos = getAlunos();
  const newAluno = {
    id: Date.now(),
    nome: aluno.nome || '',
    matricula: aluno.matricula || `2026${Math.floor(100 + Math.random() * 900)}`,
    email: aluno.email || '',
    curso: aluno.curso || 'Desenvolvimento Fullstack',
    status: aluno.status || 'Ativo',
    sticker: aluno.sticker || '🎀 Laço Rosa'
  };
  const updated = [newAluno, ...alunos];
  try {
    localStorage.setItem('escola_alunos', JSON.stringify(updated));
  } catch (err) {
    console.error("Erro ao salvar aluno:", err);
  }
  return newAluno;
}

export function deleteAluno(id) {
  if (typeof window === 'undefined') return [];
  const alunos = getAlunos();
  const updated = alunos.filter(a => a && a.id !== id);
  try {
    localStorage.setItem('escola_alunos', JSON.stringify(updated));
  } catch (err) {
    console.error("Erro ao deletar aluno:", err);
  }
  return updated;
}

export function getNotas() {
  if (typeof window === 'undefined') return INITIAL_NOTAS;
  try {
    const stored = localStorage.getItem('escola_notas');
    if (!stored) {
      localStorage.setItem('escola_notas', JSON.stringify(INITIAL_NOTAS));
      return INITIAL_NOTAS;
    }
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      localStorage.setItem('escola_notas', JSON.stringify(INITIAL_NOTAS));
      return INITIAL_NOTAS;
    }
    return parsed;
  } catch (err) {
    console.error("Erro ao carregar notas:", err);
    return INITIAL_NOTAS;
  }
}

export function saveNota(notaData) {
  if (typeof window === 'undefined') return null;
  const n1 = parseFloat(notaData.nota1) || 0;
  const n2 = parseFloat(notaData.nota2) || 0;
  const n3 = parseFloat(notaData.nota3) || 0;
  const media = parseFloat(((n1 + n2 + n3) / 3).toFixed(1));
  let situacao = "Reprovado";
  if (media >= 7.0) situacao = "Aprovado";
  else if (media >= 5.0) situacao = "Recuperação";

  const newNota = {
    id: Date.now(),
    alunoId: parseInt(notaData.alunoId) || Date.now(),
    alunoNome: notaData.alunoNome || 'Sem Nome',
    disciplina: notaData.disciplina || 'Programação Front-End',
    nota1: n1,
    nota2: n2,
    nota3: n3,
    media: media,
    situacao: situacao
  };

  const notas = getNotas();
  const updated = [newNota, ...notas];
  try {
    localStorage.setItem('escola_notas', JSON.stringify(updated));
  } catch (err) {
    console.error("Erro ao salvar nota:", err);
  }
  return newNota;
}

export function deleteNota(id) {
  if (typeof window === 'undefined') return [];
  const notas = getNotas();
  const updated = notas.filter(n => n && n.id !== id);
  try {
    localStorage.setItem('escola_notas', JSON.stringify(updated));
  } catch (err) {
    console.error("Erro ao deletar nota:", err);
  }
  return updated;
}

export function updateAluno(id, updatedFields) {
  if (typeof window === 'undefined') return [];
  const alunos = getAlunos();
  const updated = alunos.map(aluno => {
    if (aluno && aluno.id === id) {
      return { ...aluno, ...updatedFields };
    }
    return aluno;
  });
  try {
    localStorage.setItem('escola_alunos', JSON.stringify(updated));
  } catch (err) {
    console.error("Erro ao atualizar aluno:", err);
  }
  return updated;
}

export function updateNota(id, updatedFields) {
  if (typeof window === 'undefined') return [];
  const notas = getNotas();
  const updated = notas.map(nota => {
    if (nota && nota.id === id) {
      const n1 = parseFloat(updatedFields.nota1 ?? nota.nota1) || 0;
      const n2 = parseFloat(updatedFields.nota2 ?? nota.nota2) || 0;
      const n3 = parseFloat(updatedFields.nota3 ?? nota.nota3) || 0;
      const media = parseFloat(((n1 + n2 + n3) / 3).toFixed(1));
      let situacao = "Reprovado";
      if (media >= 7.0) situacao = "Aprovado";
      else if (media >= 5.0) situacao = "Recuperação";

      return {
        ...nota,
        ...updatedFields,
        nota1: n1,
        nota2: n2,
        nota3: n3,
        media: media,
        situacao: situacao
      };
    }
    return nota;
  });
  try {
    localStorage.setItem('escola_notas', JSON.stringify(updated));
  } catch (err) {
    console.error("Erro ao atualizar nota:", err);
  }
  return updated;
}

export function resetStorage() {
  if (typeof window === 'undefined') return { alunos: [], notas: [] };
  try {
    localStorage.setItem('escola_alunos', JSON.stringify(INITIAL_ALUNOS));
    localStorage.setItem('escola_notas', JSON.stringify(INITIAL_NOTAS));
  } catch (err) {
    console.error("Erro ao resetar dados:", err);
  }
  return { alunos: INITIAL_ALUNOS, notas: INITIAL_NOTAS };
}

export function exportData() {
  if (typeof window === 'undefined') return '';
  const alunos = getAlunos();
  const notas = getNotas();
  return JSON.stringify({ alunos, notas }, null, 2);
}

export function importData(jsonData) {
  if (typeof window === 'undefined') return false;
  try {
    const parsed = JSON.parse(jsonData);
    if (parsed.alunos && Array.isArray(parsed.alunos)) {
      localStorage.setItem('escola_alunos', JSON.stringify(parsed.alunos));
    }
    if (parsed.notas && Array.isArray(parsed.notas)) {
      localStorage.setItem('escola_notas', JSON.stringify(parsed.notas));
    }
    return true;
  } catch (err) {
    console.error("Erro ao importar dados", err);
    return false;
  }
}



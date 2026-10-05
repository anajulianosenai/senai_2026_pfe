let contatos = [
    {nome: 'Cacique', telefone: 18992010204},
    {nome: 'Artozzi', telefone: 18996370807},
    {nome: 'Juju', telefone: 18997818092}

];

function buscaTelefone(listaContatos, nomeProcurado) {
    for (let i = 0; i < listaContatos.length; i++) {
        if (listaContatos[i].nome == nomeProcurado) {
            return listaContatos[i].telefone;
        }
    }
    return "Contato não encontrado";
}

console.log(buscaTelefone(contatos, 'Juju'));

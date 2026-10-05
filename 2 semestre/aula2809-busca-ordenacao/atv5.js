let produtos = [
    {nomeProduto: 'Arroz 5kg', preco: 24},
    {nomeProduto: 'Feijão 1kg', preco: 8},
    {nomeProduto: 'Leite 1L', preco: 8},
    {nomeProduto: 'Café 500g', preco: 18}
];

function buscaProdutoBarato(listaProdutos) {
    for (let i = 0; i < listaProdutos.length; i++) {
        if (listaProdutos[i].preco < 20.00) {
            return listaProdutos[i].nomeProduto; 
        }
    }
    return "Nenhum produto menor que R$ 20,00 encontrado";
}

console.log(buscaProdutoBarato(produtos)); 

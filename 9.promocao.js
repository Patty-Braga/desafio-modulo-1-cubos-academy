const precos = [200, 150, 50, 100]

function solucao(precos) {
    produtoComMenorPreco = Infinity
    totalProdutos = 0
    totalComDesconto = 0

    for (let preco of precos) {
        totalProdutos += preco
        if (preco < produtoComMenorPreco) {
            produtoComMenorPreco = preco
        }
    }
    let desconto = produtoComMenorPreco * 0.5

    if (precos.length >= 3) {
        totalComDesconto = totalProdutos - desconto
        console.log(totalComDesconto);
    } else {
        console.log(totalProdutos);
    }

}

solucao(precos)
const lista = [1, 2, 3, 4]

function solucao(lista) {
    const total = lista.reduce((soma, atual) => {
        return soma + atual
    })
    let media = total / lista.length
    console.log(media);

}

solucao(lista)
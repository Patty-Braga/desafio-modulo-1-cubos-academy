function solucao(min, max, valores) {
    let jogadoresAprovados = [];
    for (valor of valores) {
        if (valor >= min && valor <= max) {
            jogadoresAprovados.push(valor)
        }
    }
    console.log(jogadoresAprovados)

}

solucao(2, 10, [0, 5, 6, 10, 11])
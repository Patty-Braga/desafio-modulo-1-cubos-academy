function solucao(texto) {
    const removerEspacos = texto.trim();
    const contadorDePalavras = removerEspacos.split(" ")

    let palavraFiltrada = []
    contadorDePalavras.filter((atual) => {
        if (atual != "") {
            palavraFiltrada.push(atual);
        }
    })

    console.log(palavraFiltrada.length);
}

solucao("Cuidado, pois usuarios as   vezes deixam espacos vazios no fim do texto sem querer ")
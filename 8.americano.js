function solucao(numeros) {
    let quantosJogadores = numeros.length
    let sorteioGoleiro = 0

    const numeroSorteado = numeros.reduce((acumulador, Valoratual) => {
        return acumulador + Valoratual
    })

    const numeroExato = numeroSorteado / 2

    if (numeroSorteado === quantosJogadores) {
        console.log(quantosJogadores);
    } else if (numeroSorteado % quantosJogadores === 0) {
        console.log(quantosJogadores);
    } else {
        sorteioGoleiro = numeroSorteado % quantosJogadores
        console.log(sorteioGoleiro);
    }
}

solucao([1, 3, 2, 1])
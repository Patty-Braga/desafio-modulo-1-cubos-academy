function solucao(lista) {
    let maiorComMenosIdade = Infinity;

    for (let atual of lista) {
        if (atual >= 18 && maiorComMenosIdade > atual) {
            maiorComMenosIdade = atual
        }
    }

    if (maiorComMenosIdade === Infinity) {
        console.log("CRESCA E APARECA");
    } else {
        console.log(maiorComMenosIdade);
    }

}

solucao([12, 18, 17, 20])
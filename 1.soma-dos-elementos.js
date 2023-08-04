const lista = [1, 2, 3, 4]

function solucao(lista) {
    let total = 0;
    for (let numero of lista) {
        total += numero;
    }
    return total;
}

console.log(solucao(lista));
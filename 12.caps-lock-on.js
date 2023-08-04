function processData(input) {
    let maiuscula = input.toUpperCase()
    let minuscula = input.toLowerCase()
    let primeiraMinusculaRestoMaiuscula = input[0].toLowerCase() + input.substring(1).toUpperCase()
    let primeiraMaiuscula = input[0].toUpperCase() + input.substring(1).toLowerCase()
    let misturada = ""

    if (maiuscula === input) {
        maiuscula = input.toLowerCase()
        console.log(maiuscula);

    } else if (minuscula === input) {
        console.log(minuscula);

    } else if (primeiraMaiuscula === input) {
        console.log(input);

    } else if (primeiraMinusculaRestoMaiuscula === input) {
        primeiraMinusculaRestoMaiuscula = input[0].toUpperCase() + input.substring(1).toLowerCase()
        console.log(primeiraMinusculaRestoMaiuscula);

    } else {
        misturada = input
        console.log(misturada);

    }
}

processData('cAPS')
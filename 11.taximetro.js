function solucao(min, km) {
    let totalPagarkm = 0;
    let totalPagarmin = 0;
    //calculo taxa um qm
    if (km <= 10) {
        //se tiver menos de 10km
        totalPagarkm += km * 70
    } else {
        //se tiver mais de 10km
        totalPagarkm += ((km - 10) * 50) + 700
    }

    //calculo taxa em min
    if (min <= 20) {
        //se tiver menos de 20 min de viagem
        totalPagarmin += min * 50
    } else {
        //se tiver mais de 20 min de viagem
        totalPagarmin += ((min - 20) * 30) + 1000
    }
    console.log(totalPagarmin + totalPagarkm);
}

solucao(25, 11.5)
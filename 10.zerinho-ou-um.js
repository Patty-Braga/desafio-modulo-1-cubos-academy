const jogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]

function solucao(jogadores) {
    let zerinho = 0;
    let zerinhoNome = "";
    let um = 0;
    let umNome = "";
    for (let jogador of jogadores) {
        if (jogador.jogada === 0) {
            zerinho++
            zerinhoNome = jogador.nome
        } else if (jogador.jogada === 1) {
            um++
            umNome = jogador.nome
        }
    }
    if (zerinho === 1) {
        console.log(zerinhoNome);
    } else if (um === 1) {
        console.log(umNome);
    } else {
        console.log("NINGUEM");
    }
}

solucao(jogadores)
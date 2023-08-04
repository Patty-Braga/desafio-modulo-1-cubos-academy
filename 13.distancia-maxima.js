//const input = '3\n0 0\n0 3\n4 0'
const input = '5/n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7'

function processData(input) {
    const linhas = input.trim().split("\n");
    const funcionarios = parseInt(linhas[0], 10);

    const coordenadas = [];
    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" ");
        coordenadas.push({
            x: Number(coord[0]),
            y: Number(coord[1])
        })
    }

    let maiorDistancia = 0;
    for (let i = 0; i < coordenadas.length; i++) {
        for (let j = 0; j < coordenadas.length; j++) {
            let distancia = Math.sqrt((coordenadas[i].x - coordenadas[j].x) ** 2 + (coordenadas[i].y - coordenadas[j].y) ** 2)
            // console.log(distancia)
            if (maiorDistancia < distancia) {
                maiorDistancia = distancia
            }
        }
    }

    console.log(maiorDistancia)
}

processData(input)
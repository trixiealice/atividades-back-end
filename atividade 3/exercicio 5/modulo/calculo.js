function listarNumeros(inicial, final) {

    let qtdePares = 0
    let qtdeImpares = 0

    console.log('\nLista de números Pares')

    for (let i = inicial; i <= final; i++) {
        if (i % 2 === 0) {
            console.log(i)
            qtdePares++
        }
    }

    console.log('Qtde de números encontrados:', qtdePares)

    console.log('\nLista de números Impares')

    for (let i = inicial; i <= final; i++) {
        if (i % 2 !== 0) {
            console.log(i)
            qtdeImpares++
        }
    }

    console.log('Qtde de números encontrados:', qtdeImpares)
}

module.exports = {
    listarNumeros
}
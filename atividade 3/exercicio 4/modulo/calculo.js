function calcularFatorial(numero) {

    let resultado = 1
    let sequencia = ''

    for (let i = numero; i >= 1; i--) {
        resultado *= i

        sequencia += i

        if (i > 1) {
            sequencia += ' x '
        }
    }

    console.log(`Fatorial de ${numero} é ${sequencia} = ${resultado}`)
}

module.exports = {
    calcularFatorial
}
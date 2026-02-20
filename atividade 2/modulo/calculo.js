function calcular(operacao, valor1, valor2) {

    valor1 = parseFloat(valor1)
    valor2 = parseFloat(valor2)

    if (operacao === '1') {
        return valor1 + valor2
    }

    if (operacao === '2') {
        return valor1 - valor2
    }

    if (operacao === '3') {
        return valor1 * valor2
    }

    if (operacao === '4') {
        return valor1 / valor2
    }

    return null
}

module.exports = { calcular }
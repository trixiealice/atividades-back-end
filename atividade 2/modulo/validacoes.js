function validarOperacao(operacao) {
    if (operacao !== '1' && operacao !== '2' && operacao !== '3' && operacao !== '4') {
        return 'Erro: operação inválida :/'
    }
    return null
}

function validarValores(valor1, valor2) {

    if (valor1 === '' || valor2 === '') {
        return 'Erro: Preencha todos os valores 𖹭'
    }

    if (isNaN(valor1) || isNaN(valor2)) {
        return 'Erro: Digite apenas números 𖹭'
    }

    return null
}

function validarDivisao(operacao, valor2) {
    if (operacao === '4' && parseFloat(valor2) === 0) {
        return 'Erro: Não é possível dividir por zero'
    }
    return null
}

module.exports = { validarOperacao, validarValores, validarDivisao }
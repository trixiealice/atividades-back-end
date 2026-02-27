function validarValores(peso, altura) {

    if (peso === '' || altura === '') {
        return 'Erro: Preencha todos os valores 𖹭'
    }

    if (isNaN(peso) || isNaN(altura)) {
        return 'Erro: Digite apenas números 𖹭'
    }

    return null
}

module.exports = {validarValores}
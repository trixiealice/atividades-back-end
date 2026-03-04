function validarCampoVazio(valor) {
    return valor && valor.trim() !== ''
}

function validarNumero(valor) {
    return !isNaN(valor)
}

module.exports = {
    validarCampoVazio,
    validarNumero
}
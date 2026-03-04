function validarCampoVazio(valor) {
    return valor && valor.trim() !== ''
}

function validarSexo(sexo) {
    const s = sexo.toUpperCase()
    return s === 'M' || s === 'F'
}

function validarNota(valor) {
    const nota = Number(valor)
    return !isNaN(nota) && nota >= 0 && nota <= 100
}

module.exports = {
    validarCampoVazio,
    validarSexo,
    validarNota
}
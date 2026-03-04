function calcularMedia(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4
}

function calcularMediaExame(media, exame) {
    return (media + exame) / 2
}

module.exports = {
    calcularMedia,
    calcularMediaExame
}
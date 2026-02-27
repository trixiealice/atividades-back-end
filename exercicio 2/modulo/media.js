function calcularMedia(nota1, nota2, nota3, nota4) {
    const media = nota1 + nota2 + nota3 + nota4 / 4
    console.log('A média do aluno é: ' + media.toFixed(2))

    if (media >= 70) {
        console.log('APROVADO(A)')
    } else if (media >= 50 && media <=70) {
        console.log('RECUPERAÇÃO')
    } else if (media < 50) {
        console.log('REPROVADO(A)')
    }
}

module.exports = {calcularMedia}
function calcularMedia(nomeAluno, nota1, nota2, nota3, nota4) {

    let mediaNotas = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

    console.log(`O aluno(a) ${nomeAluno} teve a média final de ${mediaNotas.toFixed(2)}`)
    
    return mediaNotas
}

function situacaoAluno(valorDaMedia) {
    
    if (valorDaMedia >= 70) {
        console.log('SITUAÇÃO: APROVADO(A) !!!')
    } else if (valorDaMedia >= 50 && valorDaMedia < 70) {
        console.log('SITUAÇÃO: RECUPERAÇÃO !!!')
    } else {
        console.log('SITUAÇÃO: REPROVADO(A) !!!')
    }
}

module.exports = {
    calcularMedia,
    situacaoAluno
}

const readline = require('readline')
const media = require('./modulo/media.js')
const validacoes = require('./modulo/validacoes.js')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function perguntar(pergunta) {
    return new Promise(resolve => {
        rl.question(pergunta, resposta => {
            resolve(resposta)
        })
    })
}

async function main() {

    console.log('\nSistema de Média Escolar\n')

    const nomeAluno = await perguntar('Nome do aluno: ')
    if (!validacoes.validarCampoVazio(nomeAluno)) return erro()

    const sexoAluno = await perguntar('Sexo do aluno (M/F): ')
    if (!validacoes.validarSexo(sexoAluno)) return erro()

    const nomeProfessor = await perguntar('Nome do professor: ')
    if (!validacoes.validarCampoVazio(nomeProfessor)) return erro()

    const sexoProfessor = await perguntar('Sexo do professor (M/F): ')
    if (!validacoes.validarSexo(sexoProfessor)) return erro()

    const nomeCurso = await perguntar('Nome do curso: ')
    if (!validacoes.validarCampoVazio(nomeCurso)) return erro()

    const nomeDisciplina = await perguntar('Nome da disciplina: ')
    if (!validacoes.validarCampoVazio(nomeDisciplina)) return erro()

    const n1 = await perguntar('Nota 1: ')
    const n2 = await perguntar('Nota 2: ')
    const n3 = await perguntar('Nota 3: ')
    const n4 = await perguntar('Nota 4: ')

    if (!validacoes.validarNota(n1) ||
        !validacoes.validarNota(n2) ||
        !validacoes.validarNota(n3) ||
        !validacoes.validarNota(n4)) return erro()

    const mediaFinal = media.calcularMedia(
        Number(n1), Number(n2), Number(n3), Number(n4)
    )

    const palavraAluno = sexoAluno.toUpperCase() === 'F' ? 'A aluna' : 'O aluno'
    const palavraProfessor = sexoProfessor.toUpperCase() === 'F' ? 'Professora' : 'Professor'

    const aprovado = sexoAluno.toUpperCase() === 'F' ? 'APROVADA' : 'APROVADO'
    const reprovado = sexoAluno.toUpperCase() === 'F' ? 'REPROVADA' : 'REPROVADO'

    if (mediaFinal >= 70) {
        mostrarRelatorio(palavraAluno, nomeAluno, aprovado, nomeDisciplina,
            nomeCurso, palavraProfessor, nomeProfessor,
            [n1, n2, n3, n4], mediaFinal)
    }

    else if (mediaFinal < 50) {
        mostrarRelatorio(palavraAluno, nomeAluno, reprovado, nomeDisciplina,
            nomeCurso, palavraProfessor, nomeProfessor,
            [n1, n2, n3, n4], mediaFinal)
    }

    else {
        const exame = await perguntar('Nota do exame: ')
        if (!validacoes.validarNota(exame)) return erro()

        const mediaExame = media.calcularMediaExame(mediaFinal, Number(exame))
        const statusFinal = mediaExame >= 60 ? aprovado + ' NO EXAME' : reprovado + ' NO EXAME'

        mostrarRelatorio(palavraAluno, nomeAluno, statusFinal, nomeDisciplina,
            nomeCurso, palavraProfessor, nomeProfessor,
            [n1, n2, n3, n4, exame], mediaFinal, mediaExame)
    }

    rl.close()
}

function mostrarRelatorio(aluno, nome, status, disciplina,
    curso, professor, nomeProf, notas, media, mediaExame) {

    console.log('\nRelatório do aluno:')
    console.log(`${aluno} ${nome} foi ${status} na disciplina ${disciplina}.`)
    console.log(`Curso: ${curso}`)
    console.log(`${professor}: ${nomeProf}`)
    console.log(`Notas do aluno: ${notas.join(', ')}`)
    console.log(`Média Final: ${media.toFixed(2)}`)

    if (mediaExame !== undefined) {
        console.log(`Média Final do Exame: ${mediaExame.toFixed(2)}`)
    }
}

function erro() {
    console.log('ERRO: Dados inválidos.')
    rl.close()
}

main()
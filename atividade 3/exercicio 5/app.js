const readline = require('readline')
const calculo = require('./modulo/calculo.js')
const validacoes = require('./modulo/validacoes.js')

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('\nSistema de Números Pares e Ímpares\n')

entrada.question('Número Inicial: ', function(numeroInicial){

    if (!validacoes.validarCampoVazio(numeroInicial) ||
        !validacoes.validarNumero(numeroInicial)) {
        console.log('ERRO: Digite um número válido.')
        entrada.close()
        return
    }

    const inicial = Number(numeroInicial)

    if (inicial < 0 || inicial > 500) {
        console.log('ERRO: Número inicial deve estar entre 0 e 500.')
        entrada.close()
        return
    }

    entrada.question('Número Final: ', function(numeroFinal){

        if (!validacoes.validarCampoVazio(numeroFinal) ||
            !validacoes.validarNumero(numeroFinal)) {
            console.log('ERRO: Digite um número válido.')
            entrada.close()
            return
        }

        const final = Number(numeroFinal)

        if (final < 100 || final > 1000) {
            console.log('ERRO: Número final deve estar entre 100 e 1000.')
            entrada.close()
            return
        }

        if (inicial > final) {
            console.log('ERRO: Número inicial não pode ser maior que o final.')
            entrada.close()
            return
        }

        if (inicial === final) {
            console.log('ERRO: Os números não podem ser iguais.')
            entrada.close()
            return
        }

        calculo.listarNumeros(inicial, final)

        entrada.close()
    })
})
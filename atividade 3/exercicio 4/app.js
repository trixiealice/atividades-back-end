const readline = require('readline')
const calculo = require('./modulo/calculo.js')
const validacoes = require('./modulo/validacoes.js')

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('\nSistema de Cálculo Fatorial\n')

entrada.question('Digite um número para calcular o fatorial: ', function(valor){

    if (!validacoes.validarCampoVazio(valor)) {
        console.log('ERRO: Campo vazio.')
        entrada.close()
        return
    }

    if (!validacoes.validarNumero(valor)) {
        console.log('ERRO: Digite apenas números.')
        entrada.close()
        return
    }

    const numero = Number(valor)

    if (numero == 0) {
        console.log('ERRO: Não existe fatorial de 0.')
        entrada.close()
        return
    }

    if (numero == 1) {
        console.log('ERRO: Não é possível calcular fatorial de 1. Informe número maior que 1.')
        entrada.close()
        return
    }

    if (numero < 0) {
        console.log('ERRO: Número inválido.')
        entrada.close()
        return
    }

    calculo.calcularFatorial(numero)

    entrada.close()
})
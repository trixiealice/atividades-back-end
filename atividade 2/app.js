const readline = require('readline')
const { calcular } = require('./modulo/calculo')
const { validarOperacao, validarValores, validarDivisao } = require('./modulo/validacoes')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('\nOlá! Bem vindo(a) ao Sistema de Cálculos da Empresa Cálculos SA!!!')
console.log('────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ')
console.log(' 1 - Adição \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão')

entradaDeDados.question('Qual operação matemática deseja realizar: ', function(operacao){

    const erroOperacao = validarOperacao(operacao)
    if (erroOperacao) {
        console.log(erroOperacao)
        entradaDeDados.close()
        return
    }

    entradaDeDados.question('Digite o primeiro valor: ', function(valor1) {

        entradaDeDados.question('Digite o segundo valor: ', function(valor2){

            valor1 = valor1.replace(',', '.')
            valor2 = valor2.replace(',', '.')

            const erroValores = validarValores(valor1, valor2)
            if (erroValores) {
                console.log(erroValores)
                entradaDeDados.close()
                return
            }

            const erroDivisao = validarDivisao(operacao, valor2)
            if (erroDivisao) {
                console.log(erroDivisao)
                entradaDeDados.close()
                return
            }

            const resultado = calcular(operacao, valor1, valor2)

            console.log('')
            console.log('────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ')
            if (Number.isInteger(resultado)) {
                console.log('O resultado final foi: ' + resultado)
            } else {
                console.log('O resultado final foi: ' + resultado.toFixed(2))
            }
            entradaDeDados.close()
        })
    })
})
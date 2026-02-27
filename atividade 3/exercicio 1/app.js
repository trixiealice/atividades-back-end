const readline = require('readline')
const {calcularImc} = require('./modulo/calculo')
const {validarValores} = require('./modulo/validacoes')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

    console.log('\nOlá! Bem vindo(a) ao Sistema de Cálculo de IMC do Cálculos SA!!!')
    console.log('────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ')

        entradaDeDados.question('Primeiro digite o seu peso: ', function(peso){

        entradaDeDados.question('Digite a sua altura: ', function(altura){

            peso = peso.replace(',', '.')
            altura = altura.replace(',', '.')

            const erroValores = validarValores(peso, altura)
            if (erroValores) {
                console.log(erroValores)
                entradaDeDados.close
                return
            }

            const pesoNumero = Number(peso)
            const alturaNumero = Number(altura)

            calcularImc(pesoNumero, alturaNumero)

            entradaDeDados.close()


    })
})
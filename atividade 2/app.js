const readline = require('readline')
const { calcular } = require('./modulo/calculo')

 const entradaDeDados = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
 })

 console.log('\nOlá! Bem vindo(a) ao Sistema de Calculos da Empresa Cálculos SA!!!')
 console.log('────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ')
 console.log(' 1 - Adição \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão')

 entradaDeDados.question('Qual operação matemática deseja realizar: ', function(operacao){
    let escolhaOperacao = operacao

    entradaDeDados.question('Digite o primeiro valor: ', function(valor1) {
        let valorDito1 = valor1

        entradaDeDados.question('Digite o segundo valor: ', function(valor2){
            let valorDito2 = valor2

            const validar = validar(operacao, valor1, valor2)

            const resultado = calcular(escolhaOperacao, valor1, valor2)

            console.log('')
            console.log('────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ')
            console.log('O resultado final foi: ' + resultado.toFixed(2))

            entradaDeDados.close()
        })
    })
 })
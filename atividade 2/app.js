const readline = require('readline')

 const entradaDeDados = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
 })

 console.log('\nOlá! Bem vindo(a) ao Sistema de Calculos da Empresa Cálculos SA!!!')
 console.log('────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ')
 console.log(' 1 - Adição \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão')

 entradaDeDados.question('Qual operação matemática deseja arealizar: ', function(operacao){
    let escolhaOperacao = operacao

    entradaDeDados.question('Digite o primeiro valor: ', function(valor1) {
        let valorDito1 = valor1

        entradaDeDados.question('Digite o segundo valor: ', function(valor2){
            let valorDito2 = valor2

            


        })
    })
 })
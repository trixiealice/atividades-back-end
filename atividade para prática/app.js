const readline = require('readline')

const calculos = require('./modulo/calculo.js');

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados nome
entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    //Recebe o nome do aluno
    let nomeAluno = nome

    entradaDeDados.question('Digite a nota 1: ', function(valor1){
        let nota1 = valor1

        entradaDeDados.question('Digite a nota 2: ', function(Valor2){
            let nota2 = Valor2

            entradaDeDados.question('Digite a nota 3: ', function(Valor3){
                let nota3 = Valor3
                
                entradaDeDados.question('Digite a nota 4: ', function(Valor4){
                    let nota4 = Valor4

                    let mediaFinal = calculos.calcularMedia(nomeAluno, nota1, nota2, nota3, nota4)

                    calculos.situacaoAluno(mediaFinal)

                    entradaDeDados.close()

                }) //Fecha nota 4
            }) // Fecha nota 3
        }) //Fecha nota 2
    }) //Fecha nota 1
}) //Fecha nome

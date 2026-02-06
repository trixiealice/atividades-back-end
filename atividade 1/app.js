const readline = require('readline')
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o seu nome: ', function (nome) {
    let nomeCliente = nome

    entradaDeDados.question('Digite o nome do produto: ', function (produto) {
        let nomeProduto = produto

        entradaDeDados.question('Qual o valor do produto: ', function (valor) {
            let valorProduto = valor

            entradaDeDados.question('Qual a taxa de juros do produto?: ', function (taxa) {
                let taxaJuros = taxa

                entradaDeDados.question('A compra será parcelada em meses ou anos?: ', function (mesano) {

                    if (mesano === "meses") {
                        entradaDeDados.question('Em quantas vezes deseja parcelar?: ', function (parcela) {
                            let vezesParcela = parcela

                            
                            if (nomeCliente == '' || nomeProduto == '' || valorProduto == '' || taxaJuros == '' || vezesParcela == '') {
                                console.log('ERRO: EXISTEM CAMPOS QUE NÃO FORAM PREENCHIDOS!!!')
                                entradaDeDados.close()
                            } else if (isNaN(valorProduto) || isNaN(taxaJuros) || isNaN(vezesParcela)) {
                                console.log('ERRO: A CARACTERES QUE NÃO SÃO NÚMEROS NOS VALORES')
                                entradaDeDados.close()
                            } else {
                                let valorFinal = (Number(valorProduto) * (1 + Number(taxaJuros) / 100) ** Number(vezesParcela))
                                let acrescimo = valorFinal - valorProduto

                                console.log(`
                                ******************* VIVA MODA ************************\n
                                Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.\n
                                A compra do produto ${nomeProduto}, tem um valor de: R$${valorProduto}.\n
                                A sua compra será parcelada em ${vezesParcela} meses e o Sr(a) pagará: R$ ${valorFinal.toFixed(2)}.\n
                                O acréscimo realizado ao valor de: R$${valorProduto} será de R$ ${acrescimo.toFixed(2)}.\n
                                \n
                                Muito obrigado por escolher a VIVA MODA.\n
                                *******************************************************`)
                                
                            }
                        })

                    }else if (mesano === "anos") {
                        entradaDeDados.question('Em quantos anos deseja parcelar?: ', function (parcela) {
                            let vezesParcela = parcela

                            if (nomeCliente == '' || nomeProduto == '' || valorProduto == '' || taxaJuros == '' || vezesParcela == '') {
                                console.log('ERRO: EXISTEM CAMPOS QUE NÃO FORAM PREENCHIDOS!!!')
                                entradaDeDados.close()
                            } else if (isNaN(valorProduto) || isNaN(taxaJuros) || isNaN(vezesParcela)) {
                                console.log('ERRO: A CARACTERES QUE NÃO SÃO NÚMEROS NOS VALORES')
                                entradaDeDados.close()
                            } else {
                                let tempoEmMeses = Number(vezesParcela) * 12
                                let valorFinal = Number(valorProduto) * (1 + Number(taxaJuros) / 100) ** tempoEmMeses
                                let acrescimo = valorFinal - valorProduto 

                                console.log(`
                                ******************* VIVA MODA ************************\n
                                Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.\n
                                A compra do produto ${nomeProduto}, tem um valor de: R$${valorProduto}.\n
                                A sua compra será parcelada em ${vezesParcela} anos (${tempoEmMeses} meses) e o Sr(a) pagará: R$${valorFinal.toFixed(2)}.\n
                                O acréscimo realizado ao valor de: R$${valorProduto} será de R$ ${acrescimo.toFixed(2)}.\n
                                \n
                                Muito obrigado por escolher a VIVA MODA.\n
                                *******************************************************`)
                            }
                        })
                    }
                })
            })
        })
    })
})
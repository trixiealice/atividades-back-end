const readline = require('readline')
const entradaDeDados = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o seu nome: ', function(nome){
    let nomeCliente = nome

    entradaDeDados.question('Digite o nome do produto: ', function (produto){
        let nomeProduto = produto

        entradaDeDados.question('Qual o valor do produto: ', function(valor){
            let valorProduto = valor

            entradaDeDados.question('Qual a taxa de juros do produto?: ', function(taxa){
                let taxaJuros = taxa

                entradaDeDados.question ('Em quantas vezes deseja parcelar?: ', function(parcela){
                    let vezesParcela = parcela

                    if(nomeCliente == '' || nomeProduto == '' || valorProduto == '' || taxaJuros == '' || vezesParcela == ''){
                        console.log('ERRO: EXISTEM CAMPOS QUE NÃO FORAM PREENCHIDOS!!!')
                    }

                    else if (isNaN(valorProduto) || isNaN(taxaJuros) || isNaN(vezesParcela)){
                        console.log('ERRO: A CHARACTERS QUE NÃO SÃO NÚMEROS NOS VALORES')
                    }
                    
                    let valorFinal = (Number(valorProduto) * (1 + Number(taxaJuros) / 100) ** Number(vezesParcela))

                    console.log(`******************* VIVA MODA ************************\n
Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.\n
A compra do produto ${nomeProduto}, tem um valor de: ${valorProduto}.\n
A sua compra será parcelada em ${vezesParcela} vezes e o Sr(a) pagará: ${valorFinal.toFixed(2)}.\n
O acréscimo realizado ao valor de: ${valorProduto} será de ${taxaJuros}.\n
\n
Muito obrigado por escolher a VIVA MODA.\n
*******************************************************`)
                
                })
            })
        })
    })
})
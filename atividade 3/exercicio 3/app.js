const readline = require('readline')
const tabuada = require('./modulo/tabuada.js')

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('\nSistema de Tabuada\n')

entrada.question('Tabuada inicial (2 a 100): ', function(tabInicial){

    if (tabInicial == '' || tabInicial < 2 || tabInicial > 100) {
        console.log('ERRO: Tabuada inválida.')
        entrada.close()
        return
    }

    entrada.question('Tabuada final (2 a 100): ', function(tabFinal){

        if (tabFinal == '' || tabFinal < 2 || tabFinal > 100) {
            console.log('ERRO: Tabuada inválida.')
            entrada.close()
            return
        }

        entrada.question('Contador inicial (0 a 50): ', function(contInicial){

            if (contInicial == '' || contInicial < 0 || contInicial > 50) {
                console.log('ERRO: Contador inválido.')
                entrada.close()
                return
            }

            entrada.question('Contador final (0 a 50): ', function(contFinal){

                if (contFinal == '' || contFinal < 0 || contFinal > 50) {
                    console.log('ERRO: Contador inválido.')
                    entrada.close()
                    return
                }

                if (Number(tabInicial) > Number(tabFinal) || Number(contInicial) > Number(contFinal)) {
                    console.log('ERRO: Valor inicial não pode ser maior que o final.')
                    entrada.close()
                    return
                }

                tabuada.calcularTabuada(
                    Number(tabInicial),
                    Number(tabFinal),
                    Number(contInicial),
                    Number(contFinal)
                )

                entrada.close()
            })
        })
    })
})
const readline = require('readline');
const tabuada = require('./modulo/tabuada.js');
const validacao = require('./modulo/validacoes.js');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('\ ★ Sistema de Tabuada ★ \n');

const iniciarTabuada = () => {
    entrada.question('Tabuada inicial (2 a 100): ', (tabInicial) => {
        entrada.question('Tabuada final (2 a 100): ', (tabFinal) => {
            entrada.question('Contador inicial (0 a 50): ', (contInicial) => {
                entrada.question('Contador final (0 a 50): ', (contFinal) => {

                    const dadosValidos = validacao.validarDados(tabInicial, tabFinal, contInicial, contFinal);

                    if (dadosValidos) {
                        tabuada.calcularTabuada(
                            Number(tabInicial),
                            Number(tabFinal),
                            Number(contInicial),
                            Number(contFinal)
                        );
                    } else {
                        console.log('\nPor favor, tente novamente seguindo os requisitos.\n');
                    }

                    entrada.close();
                });
            });
        });
    });
};

iniciarTabuada();
function calcularImc(peso, altura) {
    const imc = peso / (altura * altura)
    console.log('Seu IMC é: ' + imc.toFixed(2))

    if (imc < 18.5){
        console.log('Abaixo do peso')
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log('Peso normal')
    } else if (imc >= 25 && imc < 29.9){
        console.log('Acima do peso')
    } else if (imc >= 30 && imc < 34.9){
        console.log('Obesidade grau I')
    } else if (imc >= 35 && imc < 39.9){
        console.log('Obesidade grau II')
    } else {
        console.log('Obesidade grau III')
    }
}

module.exports = {calcularImc}
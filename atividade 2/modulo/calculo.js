export function calcular(escolhaOperacao, valorDito1, valorDito2) {

    if (escolhaOperacao === '1') {
        return parseFloat(valorDito1) + parseFloat(valorDito2)
    } else if (escolhaOperacao ==='2') {
        return valorDito1 - valorDito2
    } else if (escolhaOperacao === '3') {
        return  valorDito1 * valorDito2
    } else if (escolhaOperacao === '4') {
        return valorDito1 / valorDito2
    } 
}



function calcularTabuada(tabInicial, tabFinal, contInicial, contFinal) {

    for (let t = tabInicial; t <= tabFinal; t++) {

        console.log(`\nTabuada do [${t}]`)

        for (let c = contInicial; c <= contFinal; c++) {
            console.log(`${t} x ${c} = ${t * c}`)
        }
    }
}

module.exports = {
    calcularTabuada
}
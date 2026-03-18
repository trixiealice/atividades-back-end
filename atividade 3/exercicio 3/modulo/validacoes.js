const validarDados = function(tabInicial, tabFinal, contInicial, contFinal) {
    let status = true;

    if (tabInicial === '' || tabFinal === '' || contInicial === '' || contFinal === '') {
        console.log('ERRO: Nenhuma entrada de dados deverá ficar sem preenchimento.');
        status = false;
    } 
    else if (isNaN(tabInicial) || isNaN(tabFinal) || isNaN(contInicial) || isNaN(contFinal)) {
        console.log('ERRO: Por favor, insira apenas valores numéricos.');
        status = false;
    }
    else if (tabInicial < 2 || tabInicial > 100 || tabFinal < 2 || tabFinal > 100) {
        console.log('ERRO: A entrada da tabuada deverá ser entre 2 e 100.');
        status = false;
    } 
    else if (contInicial < 0 || contInicial > 50 || contFinal < 0 || contFinal > 50) {
        console.log('ERRO: O contador deverá ser entre 0 e 50.');
        status = false;
    } 
    else if (Number(tabInicial) > Number(tabFinal)) {
        console.log('ERRO: A tabuada inicial não pode ser maior que a final.');
        status = false;
    }
    else if (Number(contInicial) > Number(contFinal)) {
        console.log('ERRO: O contador inicial não pode ser maior que o final.');
        status = false;
    }

    return status;
}

module.exports = {
    validarDados
}
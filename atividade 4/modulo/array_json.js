const listaDeEstados = require("./estados_cidades")

const getListaDeEstados = function () {
    let listaUF = []
  
    listaDeEstados.estados.forEach(function (estado) {
      listaUF.push(estado.sigla)
    })
  
    return {
      uf: listaUF,
      quantidade: listaUF.length
    }
  }

const getDadosEstado = function (uf) {
    let resultado 
  
    listaDeEstados.estados.forEach(function (estado) {
      if (estado.sigla == uf.toUpperCase()) {
        delete estado.cidades
        resultado = estado
      }
    })
  
    return resultado
}

const getCapitalEstado = function (uf) {
    let resultado 
  
    listaDeEstados.estados.forEach(function (estado) {
      if (estado.sigla == uf.toUpperCase()) {
        resultado = {
          uf: estado.sigla, 
          descricao: estado.nome,
          capital: estado.capital
        }
      }
    })
  
    return resultado
}

const getEstadosRegiao = function (regiao) {
    let estadosRegiao = []
  
    listaDeEstados.estados.forEach(function (estado) {
      if (estado.regiao.toLowerCase() == regiao.toLowerCase()) {
        estadosRegiao.push({
          uf: estado.nome,
          descricao: estado.nome
        })
      }
    })
  
    return {
      regiao: regiao.toUpperCase(),
      estados: estadosRegiao
    }
  }
  
  const capitaisBrasil = function (capital){
    
  }



//   console.log("Teste lista de estados:")
//   console.log(getListaDeEstados())
  
// console.log("\nTeste dados do estado:")
// console.log(getDadosEstado('SP'))
  
//console.log("\nTeste capital:")
//console.log(getCapitalEstado('SP'))
  
console.log("\nTeste por região:")
console.log(getEstadosRegiao('Sul'))
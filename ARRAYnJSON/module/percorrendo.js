var estadosInfos = require('./estadosInfos')

var estados_cidades = estadosInfos.estadosCidades
const arrayEstado = estados_cidades.estados

const getListaDeEstados = () => {

    const estados = estadosInfos.estadosCidades.estados
    let siglas = {}
    let uf = []

    estados.forEach((estado) => {

        uf.push(estado.sigla)

    })

    siglas.uf = uf
    siglas.quantidade = estados.length

    return siglas

}

const getDadosEstado = function(nomeEstado){
  const jsonInfos = {}

    arrayEstado.forEach(function(estado) {
        if(estado.sigla.toUpperCase() == nomeEstado){
            jsonInfos.uf = estado.sigla
            jsonInfos.descricao = estado.nome
            jsonInfos.capital = estado.capital
            jsonInfos.regiao = estado.regiao
        }
    })
    return jsonInfos
}

const getCapitalEstado = function(nomeEstado){
    const jsonInfos = {}

    arrayEstado.forEach(function(estado) {
        if(estado.sigla.toUpperCase() == nomeEstado.toUpperCase()){
            jsonInfos.uf = estado.sigla
            jsonInfos.descricao = estado.nome
            jsonInfos.capital = estado.capital
        }
    })
   return jsonInfos
}

const getEstadosRegiao = function(regiaoEstado){
    const jsonInfos = {}
    const arrayEstados = []
    arrayEstado.forEach(function(estado) {
        if(estado.regiao.toUpperCase() == regiaoEstado.toUpperCase()){
         const jsonEstado = {}
            jsonEstado.uf = estado.sigla
           jsonEstado.descricao = estado.nome
            arrayEstados.push(jsonEstado)
        }
    })
    jsonInfos.regiao = regiaoEstado
    jsonInfos.estados = arrayEstados
    return jsonInfos
}

const getCapitalPais = function(){
    const jsonCapital = {}
    const arrayCapitais = []

    arrayEstado.forEach(function(capital) {
        if(capital.capital_pais != undefined){

        const jsonInfosCapital = {}
        jsonInfosCapital.capital_atual = capital.capital_pais.capital
        jsonInfosCapital.uf = capital.sigla
        jsonInfosCapital.descricao = capital.nome
        jsonInfosCapital.capital = capital.capital
        jsonInfosCapital.regiao = capital.regiao
        jsonInfosCapital.capital_pais_ano_inicio = capital.capital_pais.ano_inicio
        jsonInfosCapital.capital_pais_ano_termino = capital.capital_pais.ano_fim

        arrayCapitais.push(jsonInfosCapital)
        }
    })
    jsonCapital.capitais = arrayCapitais
    return jsonCapital
}

const getCidades = function(estadoS){
    const jsonCidades = {}
    const arrayCidades = []

    arrayEstado.forEach(function(estado){

        if(estado.sigla == estadoS.toUpperCase()){
            jsonCidades.uf = estado.sigla
            jsonCidades.descricao = estado.nome
            jsonCidades.quantidade_cidades = estado.cidades.length

            estado.cidades.forEach(function(cidade){
                arrayCidades.push(cidade.nome)
            })
            jsonCidades.cidades = arrayCidades
        }
    })
    return jsonCidades
}


let estados = getListaDeEstados()
let destados = getDadosEstado('ba')
let cestados = getCapitalEstado('sp')
let Eestados = getEstadosRegiao('nordeste')
let cPais = getCapitalPais()
let cidade = getCidades('rj')

console.log(estados)
console.log(destados)
console.log(cestados)
console.log(Eestados)
console.log(cPais)
console.log(cidade)



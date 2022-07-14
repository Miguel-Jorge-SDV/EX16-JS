function calcular() {
    var begin = document.getElementById('inicio')
    var end = document.getElementById('fim')
    var jump = document.getElementById('pula')
    var res = document.getElementById('res')
    var inicio = Number(begin.value)
    var fim = Number(end.value)
    var pula = Number(jump.value)

    if(begin.value.length == 0 || end.value.length == 0 || jump.value.length == 0) {
        alert('ERRO')
    }

    if(pula == 0) {
        alert('ERRO, mudando o passo para 1')
        pula = 1
    }
    
    res.innerHTML = 'Contando: '
    
    if(inicio < fim) {
        while (inicio <= fim) {
            res.innerHTML += `\u{1F449}${inicio} `
            inicio += pula
        }
    }
    else {
        while (inicio >= fim) {
            res.innerHTML += `\u{1F449}${inicio} `
            inicio -= pula
        }
    }
    res.innerHTML += ` \u{1F3C1}`
}
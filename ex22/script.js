function contar(){
    var inicio = parseFloat(document.getElementById('txti').value)
    var fim = parseFloat(document.getElementById('txtf').value)
    var passo = parseFloat(document.getElementById('txtp').value)
    var res =  parseFloat(document.getElementById('res').value)
    if (inicio == 0 || fim == 0 || passo == 0){
        document.getElementById('res').innerHTML = '[ERRO] dados inválidos'
    } else {
        let i = Number(inicio) 
        let f = Number(fim)
        let p = Number(passo)
        for(let c = i; c <= f; c += p){
            res.innerHTML += c
        }

    }
}
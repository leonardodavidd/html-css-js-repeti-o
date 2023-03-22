let num = parseFloat(document.getElementById('fnum'))
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function adicionar (){
    if(num < 0 || num > 100 || num == valores){
        window.alert('Valor inválido ou já encontrado na lista')
    } 
}
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //crianca
                img.setAttribute('scr', 'bebemasc.jpg')
            }else if(idade >=10 && idade < 21){
                //jovem
                img.setAttribute('scr', 'jovemmasc.jpg')
            }else if(idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('scr', 'adultomasc.jpg')
            }else {
                //idoso
                img.setAttribute('scr', 'idosomasc.jpg')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //crianca
            }else if(idade >=10 && idade < 21){
                //jovem
            }else if(idade >= 21 && idade < 50){
                //adulto
            }else {
                //idoso
            }
        }
        res.style.textAlign =  'center'
        res.innerHTML = `Seu gênero é ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
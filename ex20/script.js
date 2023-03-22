function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = date.gethours()
    var hora = 15
    msg.innerText = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src = 'testeimagemc.jpg'
        document.body.style.background = 'b7cf1f'
    }else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'testeimagema.jpg'
        document.body.style.background = '#fc4040'
    }else {
        //Boa noite
        img.src = 'imagemtesteb.jpg'
        document.body.style.background = '#193daf'
    }
}


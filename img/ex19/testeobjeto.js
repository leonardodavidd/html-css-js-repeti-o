let amigo = {nome:'leozin', sexo: 'M', peso:60.50,
engordar(p = 0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(amigo.nome+ ' pesa '+ amigo.peso + 'Kg ! ')

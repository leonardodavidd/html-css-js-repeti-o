let valores = [8, 1, 2, 9, 7, 5]
console.log(valores)
for(let pos =0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
for(let pos in valores){
    console.log(`A posição tem ${pos} tem o valor ${valores[pos]}`)
}
let pos = valores.indexOf(4)
console.log(`O valor 8 está na posição ${pos} `)
function parimpar(n){
    if (n%2 == 0){
        return 'Par !'
    }
    else {
        return 'Impar !'
    }
}
console.log(parimpar(3))
var res = parimpar(4)
console.log(res)

function soma(n1, n2){
    return n1 + n2
}
console.log(soma(2, 6))

function fatorial(n){
    let fat = 1
    for(let c = n; c >= 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))
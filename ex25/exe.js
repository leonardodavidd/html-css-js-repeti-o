function exe1() {
    let a = Number(document.getElementById('nr1').value)
    let b = Number(document.getElementById('nr2').value)
    let c = Number(document.getElementById('nr3').value)
    let d = Number(document.getElementById('nr4').value)
    var lista = [a, b, c, d]
    var lista1 = [a, b, c, d]
    lista.sort(comparaNumeros);
    lista1.sort(comparaNumeros1);
    document.getElementById('resultado').innerHTML = 'números em ordem crescente ' + lista
    document.getElementById('resultado1').innerHTML = 'números em ordem decrescente' + lista1
}
function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }
function comparaNumeros1(a,b) { if (a == b) return 0; if (a > b) return -1; if (a < b) return 1; }

function exe2() {
    let nr1 = Number(document.getElementById('nr1').value)
    let despesa = 200
    if (nr1 == 120){
        let preco = 5
        var lucro = (nr1 * preco) - despesa
    }
    else if (nr1 == 146){
        let preco = 4.50
        var lucro = (nr1 * preco) - despesa
    }
    else if (nr1 == 172){
        let preco = 4
        var lucro = (nr1 * preco) - despesa
    }
    else if (nr1 == 198){
        let preco = 3.50
        var lucro = (nr1 * preco) - despesa
    }
    else if(nr1 == 224){
        let preco = 3
        var lucro = (nr1 * preco) - despesa
    }
    else if(nr1 == 250){
        let preco = 2.50
        var lucro = (nr1 * preco) - despesa
    }
    else if(nr1 == 276){
        let preco = 2
        var lucro = (nr1 * preco) - despesa
    }
    else if(nr1 == 302){
        let preco = 1.50
        var lucro = (nr1 * preco) - despesa
    }
    else if(nr1 == 328){
        let preco = 1
        var lucro = (nr1 * preco) - despesa
    }
    document.getElementById('resultado').innerHTML = `Lucro máximo esperado ${lucro}`
    document.getElementById('resultado').innerHTML = `Preço unitário dos ingressos ${preco}`
    document.getElementById('resultado').innerHTML = `Quantidade de ingressos vendidos para obtenção do lucro ${nr1}`
}
function exe3(){
    let idade
    let f1=0; let f2=0; let f3=0; let f4=0; let f5=0;
    for(let conta = 1; conta <= 8; conta++){
        idade = prompt(`informe a idade ${conta}`)
        if ((idade >=0) && (idade <=15)){
            f1++
        }
        else if ((idade >=16) && (idade <=30)){
            f2++
        }
        else if ((idade >=31) && (idade <=45)){
            f3++
        }
        else if ((idade >=46) && (idade <=60)){
            f4++
        }
        else if ((idade >=61) && (idade <=120)){
            f5++
        }
        else alert('Idade inválida ! ')
    }
    let pf1 = f1 / 8*100
    let pf5 = f5 / 8*100
    alert(`F1: ${f1} F2: ${f2} F3: ${f3} F4: ${f4} F5: ${f5} `)
    alert(`Porcentagem de pessoas na primeira faxa etária em relação ao total de pessoas ${pf1}`)
    alert(`Porcentagem de pessoas na última faxa etária em relação ao total de pessoas ${pf5}`)
}
function exe4(){
    let numero = prompt (`Informe o número desejado ! `)
    let saida = ""
    for (let conta = 0; conta <= 10; conta++){
        saida = saida + "\n" + `${numero}x ${conta} = ${numero * conta}`
    }
    alert(saida)
}
function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}
function exe6(){
    var vista = 0
    var prazo = 0
    for(let conta = 0; conta <=15; conta++){
        let opcao =  prompt(`informe o código V para transações à vista e P para transações a prazo`)
        let valor =  parseInt(prompt('informe o valor da transação: ' + conta))
        if (opcao == 'V'){
            vista += valor
        }
        else if (opcao == 'P'){
            prazo += valor
        }
    }
    alert('A soma das transações a vista' + vista + ', a soma das transações a prazo' + prazo)
    alert('A soma de todas as transações' + (prazo + vista))
    alert('Valor da primeira das 3 parcelas que serão pagas das transações a prazo' + (prazo/3))
}
function exe7(){
    var quant = 0
    var quant2 = 0
    var quant3 = 0
    var quant4 = 0
    for(let conta = 0; conta <=4; conta++){
        let idade = parseInt(prompt(`Digite a sua idade `))
        let peso =  parseInt(prompt(`Digite o seu peso `))
        let altura =  parseFloat(prompt(`Digite a sua altura `))
        if (idade > 50){
            quant += 1
        }
        if (idade >=10 && idade <=20){
            quant2 += 1
            quant3 += altura
        }
        if (peso < 40){
            quant4 += 1
        }
    }
    let media = parseFloat(quant3 / quant2)
    let media2 = parseFloat(quant4 / 5 * 100)
    alert('Quantidade de pessoas com idade superior a 50 anos:' + quant)
    alert('Média das alturas das pessoas entre 10 e 20 anos:' + media)
    alert('Porcentagem de pessoas com peso inferior a 40kg entre todas as pessoas analisadas' + media2 + 'por cento')

}
function exe8(){
    let conta1 = 0
    let conta2 = 0
    let conta3 = 0
    let conta4 = 0
    let conta5 = 0
    for(let conta =1; conta <=6; conta++){
        let idade = parseInt(prompt(`Digite a sua idade`))
        let peso = parseFloat(prompt(`Digite o seu peso`))
        let altura = parseFloat(prompt(`Digite a sua altura`))
        let cor = prompt(`Digite a cor dos seus olhos, A-P-V-C`)
        let cor2 = prompt(`Digite a cor dos seus cabelos, P-C-L-R`)
        if (idade > 50 && peso < 60){
            conta1 += 1
        }
        if (altura < 1,50){
            conta2 += 1
            conta3 += idade
        }
        if (cor2 == 'R' && cor != 'A'){
            conta5 += 1
        }
        if (cor == 'A'){
            conta4 += 1
        }
    }
    let porcentagem = parseFloat(conta4 / 6 * 100)
    let media = parseFloat(conta3 / conta2)
    alert('Quantidade de pessoas com idade superior a 50 anos e peso inferior a 60 KG ' + conta1)
    alert('Média das idades das pessoas com altura inferior a 1,50 ' + media)
    alert('A porcentagem das pessoas com olhos azuis entre todas as pessoas entrevistas ' + porcentagem)
    alert('Quantidade de pessoas ruivas que não possuem olhos azuis ' + conta5)


}
function exe9(){
    let conta1 = 0
    let conta2 = 0
    let conta3 = 0
    let conta4 = 0
    for(let conta = 1; conta <=4; conta++){
        let idade = parseInt(prompt(`Digite a sua idade`))
        let peso = parseFloat(prompt(`Digite o seu peso`))
        let altura = parseFloat(prompt(`Digite a sua altura`))
        conta1 += idade
        if((peso > 90) && (altura < 1,50)){
            conta2 += 1
        }
        if((idade >= 10) && (idade <= 30)){
            conta3 += 1
        }
        if(altura > 1,90){
            conta4 += 1
        }
    }
    let media = parseFloat(conta1 / 4)
    let porcentagem = parseFloat(conta3 / conta4 * 100)
    alert(`A média de todas as idades digitadas ${media}`)
    alert(`Quantidade de pessoas com peso superior a 90KG e altura inferior a 1,50 ${conta2}`)
    alert('Porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de 1,90: ' + porcentagem + 'por cento')
}
function exe10(){
    let soma = 0
    let soma2 = 0
  for(let conta = 0; conta <=9; conta++){
    var n = parseInt(prompt('Digite um número'));
    var divisores = 0;
    for(i=1; i<=n; i++){
      if (n%i == 0){
          divisores += 1
      }
    }
    if(divisores ==2){
      soma += n
    }
    if(n % 2 == 0){
      soma2 += n
    }
  }
    alert(`Soma dos números pares ${soma2} `)
    alert(`Soma dos números primos ${soma} `)   
}
    

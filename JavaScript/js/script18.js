alert('Programa calculo de área geometrica plana:')

let opcao = (prompt('Digite o número da figura grometrica :\n 1. Triângulo\n 2.Quadrado\n 3. Retangulo\n 4.Circulo '))
if (opcao == 1) {
    let base = parseFloat(prompt('Digite o valor da base: '))
    let altura = parseFloat(prompt('Digite o valor da altura: '))
    let area = base * altura /2
    alert('A área do triângulo corresponde a: ' + area)
} else
    if (opcao == 2 ){
        let lado = parseFloat(prompt('Digite o valor do lado: '))
        let area = lado * lado
        alert('A área do quadrado corresponde a: ' + area)
    }
    else
        if (opcao == 3){
            let base = parseFloat(prompt('Digite o valor da base: '))
            let altura = parseFloat(prompt('Digite o valor da altura: '))
            let area = base * altura
            alert('A área do retangulo corresponde a: ' + area) 
        }
        else
            if (opcao == 4){
                let raio = parseFloat(prompt('Digite o valor do raio: '))
                let area = 3.14 * raio * raio
                alert('A área do circulo corresponde a: ' + area)
            }
            else{
                alert('Não possui número correspondente')
            }
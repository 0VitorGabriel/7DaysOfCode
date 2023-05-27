const operador = prompt('qual operador deseja utilizar? \n+ adição \n- subtração \n* multiplicação \n/ divisão \nou deseja sair?')

switch (operador) {
    case '+':
        perguntas(adicao)
        break
    case '-':
        perguntas(subtracao)
        break
    case '*':
        perguntas(multiplicacao)
        break
    case '/':
        perguntas(divisao)
        break
    case 'sair':
        alert('até a próxima!')
        break
}

function perguntas(operador) {
    const numero1 = Number(prompt('primeiro valor: '))
    const numero2 = Number(prompt('segundo valor: '))

    operador(numero1, numero2)
}

function adicao(numero1, numero2) {
    let resultado = numero1 + numero2
    
    alert(`a soma dos valores ${numero1} e ${numero2} é igual a ${resultado}`)
}

function subtracao(numero1, numero2) {
    let resultado = numero1 - numero2

    alert(`a diferença entre os valores ${numero1} e ${numero2} é igual a ${resultado}`)
}

function multiplicacao(numero1, numero2) {
    let resultado = numero1 * numero2

    alert(`a multiplicao dos números ${numero1} e ${numero2} é igual a ${resultado}`)
}

function divisao(numero1, numero2) {
    let resultado = numero1 / numero2

    alert(`a divisão dos valores ${numero1} e ${numero2} da no resultado: ${resultado}`)
}